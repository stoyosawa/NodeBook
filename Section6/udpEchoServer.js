#!/usr/bin/env node
// 2019-11-03

const dgram = require('dgram');
let server = dgram.createSocket('udp4');
server.bind(7);

server.on('listening', function() {
  console.log('Ready: ', server.address());
});
server.on('message', function(message, rinfo) {
  let src = `${rinfo.address}:${rinfo.port}`;
  console.log(`Received from ${src}: ${message}`);
  server.send(message, rinfo.port, rinfo.address);
});
server.on('error', function(err) {
  console.log(`Error: ${err.toString()}`);
  server.close();
});

	  
