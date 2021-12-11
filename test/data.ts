/* eslint-disable @typescript-eslint/no-var-requires */

import assert = require('assert');
import * as fs from 'fs';

import { parse } from 'csv-parse';

const ltsv = require('ltsv');

import { Holiday } from '../data';

describe('data', function () {
  it('should can parse CSV', function (done) {
    const parser = parse();

    parser.on('readable', function () {
      let record;

      while ((record = parser.read())) {
        assert(record.length === 2);
      }
    });
    parser.on('error', done);
    parser.on('end', done);

    fs.createReadStream(require.resolve('../data.csv')).pipe(parser);
  });
  it('should can parse JavaScript', function () {
    assert.doesNotThrow(function () {
      const data: { holidays: Holiday[] } = require('../data.js');

      const { holidays } = data;

      for (const holiday of holidays) {
        assert(Object.keys(holiday).length === 2);
      }
    });
  });
  it('should can parse JSON', function () {
    assert.doesNotThrow(function () {
      const data: { holidays: Holiday[] } = require('../data.json');

      const { holidays } = data;

      for (const holiday of holidays) {
        assert(Object.keys(holiday).length === 2);
      }
    });
  });
  it('should can parse LTSV', function (done) {
    const parser = ltsv.createLtsvToJsonStream({
      objectMode: true
    });

    parser.on('readable', function () {
      let record;

      while ((record = parser.read())) {
        assert(Object.keys(record).length === 2);
      }
    });
    parser.on('error', done);
    parser.on('end', done);

    fs.createReadStream(require.resolve('../data.ltsv')).pipe(parser);
  });
  it('should can parse ES Module');
  it('should can parse TSV', function (done) {
    const parser = parse({
      delimiter: '\t'
    });

    parser.on('readable', function () {
      let record;

      while ((record = parser.read())) {
        assert(record.length === 2);
      }
    });
    parser.on('error', done);
    parser.on('end', done);

    fs.createReadStream(require.resolve('../data.tsv')).pipe(parser);
  });
  it('should can parse TypeScript', function () {
    assert.doesNotThrow(function () {
      const data: { holidays: Holiday[] } = require('../data.ts');

      const { holidays } = data;

      for (const holiday of holidays) {
        assert(Object.keys(holiday).length === 2);
      }
    });
  });
});
