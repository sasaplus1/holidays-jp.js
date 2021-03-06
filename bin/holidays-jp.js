#!/usr/bin/env node

const { isHoliday } = require('../');

const date = new Date(process.argv[2] || Date.now());

process.exitCode = isHoliday(date) ? 0 : 1;
