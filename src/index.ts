import axios from 'axios'
import geoip from 'geoip-lite'
import publicIp from 'public-ip'
import Table from 'cli-table'

import { convertToLocalTime } from './utils'
import { defaultFields, extendedFields } from './constants'

export type SunriseOptions = {
  help?: boolean;
  ip?: string;
  lat?: Number;
  long?: Number;
  extended?: Boolean;
};

export class Sunrise {
  private ip: string | undefined;
  long: Number | undefined;
  lat: Number | undefined;
  extended: Boolean | undefined;

  constructor (options: SunriseOptions) {
    this.ip = options.ip
    this.lat = options.lat
    this.long = options.long
    this.extended = options.extended
  }

  async init () {
    // If no ip, no lat, no long, then we have to get the user external ip
    if (!this.ip && !this.lat && !this.long) {
      this.ip = await publicIp.v4()
    }

    // If we have the ip, we just need to get lat and lng for the location
    if (this.ip) {
      [this.lat, this.long] = this.getLatLongForIp(this.ip)
    }

    // Now we should have both lat and lng available
    if (!this.lat && !this.long) {
      console.log('Error: Unable to get lat and lng for your location!')
      process.exit(2)
    }

    // Get sunrise details and log them
    let data = await this.getSunriseDataForLatLng(this.lat!, this.long!)
    data = convertToLocalTime(data)
    this.printResults(data)
  }

  /**
   * For the given ip address use the geoip library
   * and return it's approximate latitude and longitude.
   *
   * @param ip {string} Target ip
   * @returns {Number[]}
   */
  getLatLongForIp (ip: string) {
    return geoip.lookup(ip)?.ll
  }

  /**
   * For a given latitude and longitude,
   * returns the available sunset/sunrise data from the api.
   *
   * @param lat {Number} Latitude
   * @param long {Number} Longitude
   * @returns {SunsetApiResult}
   */
  async getSunriseDataForLatLng (lat: Number, long: Number) {
    const response = await axios.get(
      `https://api.sunrise-sunset.org/json?lat=${this.lat}&lng=${this.long}&formatted=0`
    )

    return response.data.results
  }

  /**
   * Prints the api results to the console.
   *
   * @param data {object}
   */
  printResults (data: any) {
    const tableHead = this.extended ? extendedFields : defaultFields

    const table = new Table({
      style: { head: ['green'] },
      head: tableHead
    })

    // table is an Array, so we can `push`, `unshift`, `splice`
    // As we don't want to always show all information, unless --extended
    // argument is passed, we
    table.push(Object.values(data).splice(0, tableHead.length))
    console.log(table.toString())
  }
}
