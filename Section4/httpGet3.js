#!/usr/bin/env node
// 2019-12-29

const http = require('http');

let url = process.argv[2] || 'http://www.google.com';
let client = http.get(url, function(res) {
  let statusLine = `HTTP/${res.httpVersion} ` +
      `${res.statusCode} ${res.statusMessage}`;
  console.log(statusLine);
  for(let head in res.headers) {
    console.log(`${head}: ${res.headers[head]}`);
  }
  console.log('');

  res.setEncoding('utf8');
  res.on('data', function(chunk) {
    console.log(chunk);
  });
  res.on('close', function() {
    console.log('Connection closed');
  });
  res.on('end', function() {
    console.log('Response data end');
  });
  res.on('aborted', function() {
    console.log('Connection aborted');
  });
});
