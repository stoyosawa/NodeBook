#!/usr/bin/env node
// 2020-02-25

const dgram = require('dgram');
require('buffer').INSPECT_MAX_BYTES = 256;

let header = Buffer.alloc(12, 0);
header.writeUInt16BE(0x1234, 0);
header.writeUInt16BE(0x0001, 4);

let domain = Buffer.from('\3www\6google\3com\0');

let type = Buffer.alloc(4, 0);
type.writeUInt16BE(0x0001, 0);      // A = 1
type.writeUInt16BE(0x0001, 2);      // IN (internet) = 1;

let req = Buffer.concat([header, domain, type]);

let client = dgram.createSocket('udp4', function(message, rinfo) {
  console.log(`Recv ${message.length} bytes: `, message);
  client.disconnect();
  client.close();
});

client.connect(53, '8.8.8.8', function(err) {
  if (err) {
    console.log(`Err: ${err.toString()}`);
    client.close();
  }
  console.log('Connected');
  console.log('Local: ', client.address());
  console.log('Remote: ', client.remoteAddress());

  client.send(req, function() {
    console.log(`Sent ${req.length} bytes: `, req);
  });
});


