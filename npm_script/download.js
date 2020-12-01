const querystring = require('querystring');

const iconvLite = require('iconv-lite');
const request = require('request');

const parameter = querystring.stringify({
  id: 'd9ad35a5-6c9c-4127-bdbe-aa138fdffe42'
});
const URL = `https://www.data.go.jp/data/api/action/resource_show?${parameter}`;

request(URL, function (error, response, body) {
  if (error) {
    throw error;
  }

  const { result } = JSON.parse(body);
  const { url } = result;

  request
    .get(url)
    .pipe(iconvLite.decodeStream('cp932'))
    .pipe(iconvLite.encodeStream('utf8'))
    .pipe(process.stdout);
});
