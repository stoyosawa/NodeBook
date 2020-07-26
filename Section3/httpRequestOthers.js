#!/usr/bin/env node
// 2020-01-05

const https = require('https');
let methods = ['GET', 'HEAD', 'POST', 'PUT', 'DELETE', 'OPTIONS'];

// メソッド確認
let method = process.argv[2];
if (method === undefined)
  throw 'Specify http method in the first argument.';
method = method.toUpperCase();
if (! methods.includes(method))
  throw `Unsupported method. Supported: ${methods.join(', ')}`;

let options = {
  host: '192.168.235.10',
  path: process.argv[3],
  method: method,
  auth: 'xxx:xxx',
  rejectUnauthorized: false
}

let client = https.request(options, function(res) {
  let statusLine = `HTTP/${res.httpVersion} ` +
      `${res.statusCode} ${res.statusMessage}`;
  console.log(statusLine);
  for(let head in res.headers) {
    console.log(`${head}: ${res.headers[head]}`);
  }
  res.setEncoding('utf8');
  let chunks = [];
  res.on('data', function(chunk) {
    chunks.push(chunk);
  });
  res.on('end', function() {
    if (chunks.length === 0)
      console.log('\nNo body');
    else
      console.log('\n' + chunks.join(''));
  });
});
client.on('error', function(err) {
  console.log(`Error: ${err.toString()}`);
});

if (method === 'POST' || method === 'PUT')
  client.write('Поехали!\n');    // Let's go
client.end();

