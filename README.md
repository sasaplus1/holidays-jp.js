# holidays-jp.js

[![test](https://github.com/sasaplus1/holidays-jp.js/workflows/test/badge.svg)](https://github.com/sasaplus1/holidays-jp.js/actions?query=workflow%3Atest)
[![npm version](https://badge.fury.io/js/holidays-jp.svg)](https://badge.fury.io/js/holidays-jp)
[![Try holidays-jp on RunKit](https://badge.runkitcdn.com/holidays-jp.svg)](https://npm.runkit.com/holidays-jp)

get Japanese public holidays

## Installation

### npm

```console
$ npm install holidays-jp
```

### yarn

```console
$ yarn add holidays-jp
```

## Usage

```js
const holidays = require('holidays-jp');
```

### Example

```js
const date = new Date(2019, 1 - 1, 1, 0, 0, 0, 0);

holidays.isHoliday(date); // => true
```

```js
const date = new Date(2019, 1 - 1, 1, 0, 0, 0, 0);

holidays.getHolidayInfo(date); // => { date: '2019-01-01', name: '元日', ... }
```

### CLI

holidays-jp.js has CLI command:

```console
$ npx holidays-jp '2019-01-01T00:00:00+09:00'
$ echo $?
0
```

```console
$ npx holidays-jp '2019-01-02T00:00:00+09:00'
$ echo $?
1
```

use current time if don't pass argument:

```console
$ date +%FT%T
2019-08-25T03:09:59
$ npx holidays-jp
$ echo $?
1
```

### Related

- [sasaplus1/japanese-public-holidays](https://github.com/sasaplus1/japanese-public-holidays)

## License

The MIT license.
