#!/usr/bin/env node
// 2020-03-15

const http = require('http');

try {
  let client = http.get('http://nosuchserver.jp', function(res) {
    res.on('data', function(chunk) {
      console.log(chunk);
    });
  });
  client.on('error', function(err) {
    console.log(`On-error: ${err.toString()}`);
  });
}
catch(err) {
  console.log(`Try-catch: ${err.toString()}`);
}
