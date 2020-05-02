#!/usr/bin/env node
// 2020-01-05

const https = require('https');

let options = {
  protocol: 'https:',
  host: '192.168.235.10',
  path: '/dav/test.txt',
  method: 'PUT',
  auth: 'satoshi:satoshi',
  rejectUnauthorized: false,
  headers: {
    'User-Agent': 'Test https put (Node.js)'
  }
}

let client = https.request(options, function(res) {
  console.log(`${res.statusCode} ${res.statusMessage}`);
  let chunks = [];
  res.setEncoding('utf8');
  res.on('data', function(chunk) {
    chunks.push(chunk);
  });
  res.on('end', function() {
    console.log(chunks.join(''));
  });
});
client.on('error', function(err) {
  console.log(`Error: ${err.toString()}`);
});

client.write('Я чайка\n');
client.end();


