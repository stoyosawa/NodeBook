#!/usr/bin/env node
// 2020-01-06

const http = require('http');
let server = http.createServer();

setTimeout(function() {
  server.close();
}, 5000);

let label = 'S';
console.time(label);

server.on('close', function() {
  console.timeLog(label, 'close - server closed');
});
server.on('connection', function(sock) {
  let addr = sock.remoteAddress;
  let port = sock.remotePort;
  console.timeLog(label, `connection: from ${addr}:${port}`);
});
server.on('listening', function() {
  let local = JSON.stringify(server.address());
  console.timeLog(label, `listening: ${local}`);
});

server.listen(8080, '127.0.0.1');


