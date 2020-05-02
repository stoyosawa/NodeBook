#!/usr/bin/env node
// 2019-12-29

const http = require('http');

let options = {            // デフォルト
  auth: 'user:pass',       // なし
  method: 'GET',           // GET
  host: '192.168.235.1',   // localhost
  port: 8080,              // 80
  path: '/',               // /
  protocol: 'http:',       // http:
  headers: {
    'User-Agent': 'my Node.js Get script',
    Connection: 'Keep-Alive',
    Accept: '*/*'
  }
}
  
let client = http.get(options, function(res) {
  res.on('data', function(chunk) {
    console.log(`IncomingMessage: Got ${chunk.length} bytes.`);
  });
  res.on('close', function() {
    console.log('IncomingMessage: Closed.');
  });
  res.on('end', function() {
    console.log('IncomingMessage: Ended.');
  });
});

client.on('error', function(err) {
  console.log(`ClientRequest: Error received: ${err.toString()}`);
});
