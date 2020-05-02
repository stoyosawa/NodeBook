#!/usr/bin/env node
// 2020-02-015

const net = require('net');

let client = net.createConnection(7);
client.setEncoding('utf8');

client.on('data', function(chunk) {
  console.log(`Server: ${chunk}`);
});
client.on('close', function() {
  console.log('closed');
  process.exit();
});
client.on('error', function(err) {
  console.log(`Spell of destruction: ${err.toString()}`);
});

process.stdin.on('data', function(line) {
  client.write(line);
});
