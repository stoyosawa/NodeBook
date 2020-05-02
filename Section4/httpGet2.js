#!/usr/bin/env node
// 2019-12-29

const http = require('http');

let url = process.argv[2] || 'http://www.google.com';
let client = http.get(url, function(res) {
  for(let prop of ['httpVersion', 'statusCode', 'statusMessage']) {
    console.log(`${prop}: ${res[prop]}`);
  }
  for(let head in res.headers) {
    console.log(`${head}: ${res.headers[head]}`);
  }
});

