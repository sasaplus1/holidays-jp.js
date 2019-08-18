# holidays-jp.js

[![renovate](https://badges.renovateapi.com/github/sasaplus1/holidays-jp.js)](https://renovatebot.com)

get Japanese public holidays

## Installation

### npm

```console
$ npm install holidays-jp
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

## holidays data

holidays-jp.js has some format holidays data, it converted from [syukujitsu.csv](https://www8.cao.go.jp/chosei/shukujitsu/syukujitsu.csv):

```js
const fs = require('fs');

const js = require('holidays-jp/data.js');
const json = require('holidays-jp/data.json');

const csv = fs.readFileSync(require.resolve('holidays-jp/data.csv'), 'utf8');
const tsv = fs.readFileSync(require.resolve('holidays-jp/data.tsv'), 'utf8');
const ltsv = fs.readFileSync(require.resolve('holidays-jp/data.ltsv'), 'utf8');
```

### Related

[「国民の祝日」について](https://www8.cao.go.jp/chosei/shukujitsu/gaiyou.html)

## License

The MIT license.
