const assert = require('assert');
const fs = require('fs');

const csvParse = require('csv-parse');
const ltsv = require('ltsv');

describe('data', function() {
  it('should can parse CSV', function(done) {
    const parser = csvParse();

    parser.on('readable', function() {
      let record;

      while ((record = parser.read())) {
        assert(record.length === 2);
      }
    });
    parser.on('error', done);
    parser.on('end', done);

    fs.createReadStream(require.resolve('../data.csv')).pipe(parser);
  });
  it('should can parse JavaScript', function() {
    let data;

    assert.doesNotThrow(function() {
      data = require('../data.js');
    });

    const { holidays } = data;

    for (let holiday of holidays) {
      assert(Object.keys(holiday).length === 2);
    }
  });
  it('should can parse JSON', function() {
    let data;

    assert.doesNotThrow(function() {
      data = require('../data.json');
    });

    const { holidays } = data;

    for (let holiday of holidays) {
      assert(Object.keys(holiday).length === 2);
    }
  });
  it('should can parse LTSV', function(done) {
    const parser = ltsv.createLtsvToJsonStream({
      objectMode: true
    });

    parser.on('readable', function() {
      let record;

      while ((record = parser.read())) {
        assert(Object.keys(record).length === 2);
      }
    });
    parser.on('error', done);
    parser.on('end', done);

    fs.createReadStream(require.resolve('../data.ltsv')).pipe(parser);
  });
  it('should can parse TSV', function(done) {
    const parser = csvParse({
      delimiter: '\t'
    });

    parser.on('readable', function() {
      let record;

      while ((record = parser.read())) {
        assert(record.length === 2);
      }
    });
    parser.on('error', done);
    parser.on('end', done);

    fs.createReadStream(require.resolve('../data.tsv')).pipe(parser);
  });
});
