const csvParse = require('csv-parse');
const csvStringify = require('csv-stringify');

const { convertToIso8601 } = require('./convert');

process.stdin
  .pipe(
    csvParse({
      from_line: 2,
      columns: ['date', 'name']
    })
  )
  .pipe(
    csvStringify({
      cast: {
        string(value) {
          return /^[\d/]+$/.test(value) ? convertToIso8601(value) : value;
        }
      },
      columns: ['date', 'name'],
      delimiter: '\t',
      header: true
    })
  )
  .pipe(process.stdout);
