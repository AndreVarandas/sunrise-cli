<p align="center">
    <img src="https://raw.githubusercontent.com/AndreVarandas/sunrise-cli/master/art/logo.png" width="350" height="350" alt="Sunrise cli logo">
</p>

# sunrise-cli
Get the sunrise and sunset for your location or target, right from your terminal!

[![npm (scoped)](https://img.shields.io/npm/v/@varandas/sunrise-cli.svg)](https://www.npmjs.com/package/@varandas/sunrise-cli)
[![npm](https://img.shields.io/npm/dm/@varandas/sunrise-cli.svg)](https://npmcharts.com/compare/@varandas/sunrise-cli)

[![Build Status](https://travis-ci.org/AndreVarandas/sunrise-cli.svg?branch=master)](https://travis-ci.org/AndreVarandas/sunrise-cli)
[![Codecov Coverage](https://img.shields.io/codecov/c/github/AndreVarandas/sunrise-cli/master.svg?style=flat-square)](https://codecov.io/gh/AndreVarandas/sunrise-cli/)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![Known Vulnerabilities](https://snyk.io/test/github/AndreVarandas/sunrise-cli/badge.svg?targetFile=package.json)](https://snyk.io/test/github/AndreVarandas/sunrise-cli?targetFile=package.json)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/AndreVarandas/sunrise-cli/blob/master/LICENSE)

## Motivation
Developers rarely take their eyes from the terminal, completely disregarding what's it like outside. 

With this cli I can now **easily** and quickly check how it is currently.

<p align="center">
    <img src="https://raw.githubusercontent.com/AndreVarandas/sunrise-cli/master/art/meme.jpg" alt="Me during the day meme">
</p>

## Installation

> Note: you can also use `npx`! See example section.

To intall the cli run:

```bash
$ yarn global add @varandas/sunrise

OR with NPM

$ npm install -g @varandas/sunrise
```

And that's it, you're now empowered!

## Usage

In order to check how it is outside, please just use the following command:

```bash
$ sunrise
```

The cli also accepts a few arguments:

- `--help` - get help on the cli usage.
- `--lat` - specifies location latitude.
- `--long` - specifies location longitude.
- `--extended` - adds more details to the response.
- `--ip` - specifies the ip to use for the location.


### Example 

Get sunrise/sunset details for New York

If you're using npx as an alternative, you can replace `$ sunrise` with `$ npx @varandas/sunrise-cli`
before passing in the arguments.

```bash
$ npx @varandas/sunrise-cli --lat 40.730610 --long -73.935242
```

With global install

```bash
$ sunrise --lat 40.730610 --long -73.935242
```

## Response

The regular response includes:

- Sunrise
- Sunset
- Solar Moon
- Day Length

```bash
$ sunrise
```

<p align="center">
    <img src="https://raw.githubusercontent.com/AndreVarandas/sunrise-cli/master/art/default.png" alt="Sunrise cli example call">
</p>

The extended response includes:

- Sunrise
- Sunset
- Solar Moon
- Day Length
- Civil Twilight Begin
- Civil Twilight End
- Nautical Twilight Begin
- Nautical Twilight End
- Astronomical Twilight Begin
- Astronomical Twilight End

<p align="center">
    <img src="https://raw.githubusercontent.com/AndreVarandas/sunrise-cli/master/art/extended.png" alt="Sunrise cli extended call">
</p>

It is reaaaly extended, make sure you have a wide terminal window.

## Credits

This project was only possible thanks to the awesome team at [Sunrise Sunset](https://sunrise-sunset.org/api).

## LICENSE
[MIT License](LICENSE)

Copyright (c) 2020 André Varandas

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

