#!/usr/bin/env node
// 2019-09-29

const net = require('net');
require('buffer').INSPECT_MAX_BYTES = 2000;

let soc = new net.Socket();
soc.setEncoding('utf8');
soc.connect(43, 'whois.nic.ad.jp', function() {
  soc.write('131.113.131.113\r\n');
  soc.end();
});
soc.on('data', function(chunk) {
  console.log(`Got it: ${chunk}`);
  console.log(chunk);
});
soc.on('close', function() {
  console.log('socket closed');
});

