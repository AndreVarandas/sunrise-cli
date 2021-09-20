import arg from 'arg'
import chalk from 'chalk'

import { Sunrise, SunriseOptions } from './index'

const helpMessage = chalk`
  {bold USAGE}

      {dim $} {bold sunrise}
      {dim $} {bold sunrise} --ip {underline "target-ip-address"}
      {dim $} {bold sunrise} --ip {underline "target-ip-address"} --extended
      {dim $} {bold sunrise} --date {underline "YYYY-MM-DD"}

  {bold OPTIONS}
      --help                    Shows this help message.
      --ip {underline  target-ip-address}   The ip address that will be used as location.
      --lat {underline latitude}            Location latitude.
      --long {underline longitude}          Location longitude.
      --date {underline date}               Date in YYYY-MM-DD format.
      --extended                Logs extended information.
`

/**
 * Parses the required arguments,
 * transforming them into our known object of SunriseOptions.
 *
 * @param rawArgs {string[]}
 */
function parseArgsIntoOptions (rawArgs: string[]): SunriseOptions | undefined {
  try {
    const args = arg(
      {
        '--help': Boolean,
        '--lat': Number,
        '--long': Number,
        '--ip': String,
        '--date': String,
        '--extended': Boolean,
        '-h': '--help',
        '-e': '--extended'
      },
      {
        argv: rawArgs.slice(2)
      }
    )

    return {
      help: args['--help'],
      ip: args['--ip'],
      lat: args['--lat'],
      long: args['--long'],
      date: args['--date'],
      extended: args['--extended']
    }
  } catch (error: any) {
    if (error.code === 'ARG_UNKNOWN_OPTION') {
      console.log(error.message)
      process.exit(2)
    } else {
      throw error
    }
  }
}

/**
 * Check if passed in options are correct.
 *
 * @param options {SunriseOptions}
 */
function validateOptions (options: SunriseOptions) {
  if (options.help) {
    console.error(helpMessage)
    process.exit(2)
  }

  if (options.ip) {
    const ipRegularExp = /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/gm
    const isValidIp = ipRegularExp.test(options.ip)

    if (!isValidIp) {
      console.error('Invalid ip! Please enter a valid ip address.')
      process.exit(2)
    }
  }

  if (options.lat && !options.long) {
    console.error('Error: --long argument is also required when using --lat.')
    process.exit(2)
  }

  if (!options.lat && options.long) {
    console.error('Error: --lat argument is also required when using --long.')
    process.exit(2)
  }

  if (options.date) {
    const dateRegularExp = /^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/gm
    const isValidDate = dateRegularExp.test(options.date)

    if (!isValidDate) {
      console.error('Invalid date! Please enter a valid date (YYYY-MM-DD).')
      process.exit(2)
    }
  }
}

export async function cli (args: string[]) {
  const options = parseArgsIntoOptions(args)
  validateOptions(options!)
  const sunrise = new Sunrise(options!)
  await sunrise.init()
}
