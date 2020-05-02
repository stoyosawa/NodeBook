#!/usr/bin/env node
// 2019-02-17

const net = require('net');
let server = net.createServer().listen(80, '192.168.235.10');

let label = 'server';
console.time(label);
console.timeLog(label, `Server started. PID ${process.pid}`);

process.on('SIGINT', function() {
  console.timeLog(label, 'Received SIGINT. No time to die.');
  server.close();
});
process.on('SIGTERM', function() {
  console.timeLog(label, 'Received SIGTERM. Time to die.');
  process.exit(1);
});

server.on('listening', function() {
  console.timeLog(label, 'Server listening');
});
server.on('connection', function(soc) {
  console.timeLog(label, 'Server connected with Client');
  soc.on('error', function(err) {
    console.timeLog(label, `Client got error: ${err.toString()}`);
  });
});
server.on('close', function() {
  console.timeLog(label, 'Server closed.');
});
server.on('error', function(err) {
  console.timeLog(label, `Server error: ${err.toString()}`);
});

