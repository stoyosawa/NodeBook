#!/usr/bin/env node
// 2019-12-29

const http = require('http');

let heartbeat = setInterval(function(time) {
  process.stderr.write('.');
}, 1000);

let timer = 'timer';
console.time(timer);
let client = http.get('http://192.168.235.1:8080', function(res) {
  res.on('close', function() {
    console.timeLog(timer, 'IncomingMessage: close');
  });
  res.on('end', function() {
    console.timeLog(timer, 'IncomingMessage: end');
  });
});

client.on('error', function(err) {
  console.timeLog(timer, 'ClientRequest: error');
  clearInterval(heartbeat);
});
