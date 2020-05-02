#!/usr/bin/env node
// 2020-01-03

const https = require('https');

let client = https.get(process.argv[2], function(res) {
  console.log(`HTTP/${res.httpVersion} ${res.statusCode}`);
  res.setEncoding('utf8');
  let chunks = [];
    res.on('data', function(chunk) {
    chunks.push(chunk);
  });
  res.on('end', function() {
    let body = chunks.join('');
    console.log(`Received ${body.length} bytes.`);
    console.log(body.slice(0, 200));
  });
});
client.on('error', function(err) {
  console.log(err.toString());
});
