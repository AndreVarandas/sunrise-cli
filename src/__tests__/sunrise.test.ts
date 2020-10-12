/* eslint-disable no-undef */
import { Sunrise, SunriseOptions } from '../'

describe('Sunrise', () => {
  const options: SunriseOptions = {
    help: false,
    ip: undefined,
    lat: undefined,
    long: undefined
  }

  const sunrise = new Sunrise(options)

  test('should have been successfully instantiated', () => {
    expect(sunrise).toBeDefined()
  })
})
