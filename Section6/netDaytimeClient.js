#!/usr/bin/env node
// 2019-09-29

const net = require('net');
require('buffer').INSPECT_MAX_BYTES = 256;

let options = {
  port: 13,
  host: 'time-a-g.nist.gov',
  localPort: 50000,
};
let client = net.createConnection(options);

console.log(`client: ${client.constructor.name}`);

client.on('lookup', function(err, address, family, host) {
  console.log(`lookup: ${host} > ${address}`);
});
client.on('connect', function() {
  console.log('connect');
});
client.on('data', function(chunk) {
  console.log(`data: ${chunk}`);
  console.log(Buffer.from(chunk));
});
client.on('end', function() {
  console.log('end: FIN from the server.');
});
client.on('close', function() {
  console.log('close: Connection closed (fully).');
});
