/**
 * The api data object is in UTC timezone, therefore
 * we need to manipulate the data to set it to the local timezone.
 *
 * This means that if you're in Europe and you would like to check for Sunrise
 * in New York you would pass
 * $ sunrise --lat 40.730610 --long -73.935242
 * but you will only get the sunrise in local time!
 *
 * @param data {object} Api response
 */
export function convertToLocalTime (data: any): any {
  for (const key in data) {
    if (Object.prototype.hasOwnProperty.call(data, key)) {
      // Only the day length is in seconds we need to convert to HH:MM:SS
      if (key === 'day_length') {
        data[key] = new Date(data[key] * 1000).toISOString().substr(11, 8)
      } else {
        // The rest of the data is in date format, we can convert it to local time string like this:
        data[key] = new Date(data[key]).toLocaleTimeString()
      }
    }
  }

  return data
}
