#!/usr/bin/env node
// 2020-01-05

const http = require('http');

let client = http.request(process.argv[2], function(res) {
  let size = 0;
  res.on('data', function(chunk) {
    size += chunk.length;
  });
  res.on('end', function() {
    console.log(`Got ${size} bytes.`);
  });
});
client.on('error', function(err) {
  console.log(`Error: ${err.toString()}`);
});

setTimeout(function() {
  client.end();
}, 2000);

