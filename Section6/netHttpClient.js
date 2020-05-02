#!/usr/bin/env node
// 2020-02-12

const net = require('net');

let options = {
  port: 80,
  host: 'www.titech.ac.jp'
};

let request = [
  'GET / HTTP/1.1',
  'Host: ' + options.host,
  'Connection: close',
  '',
  ''
];

let client = net.createConnection(options);

client.on('connect', function() {
  console.log(`From: ${client.localAddress}:${client.localPort}`);
  console.log(`To: ${client.remoteAddress}:${client.remotePort}`);
  console.log(`Family: ${client.remoteFamily}`);
  client.end(request.join('\r\n'));
});
client.on('data', function(chunk) {
  console.log(`${chunk.toString()}`);
});
client.on('close', function() {
  console.log(`TX: ${client.bytesWritten}, RX: ${client.bytesRead}`);
});

console.log(`Readable: ${client.readable}`);
console.log(`Writable: ${client.writable}`);

