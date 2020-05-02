#!/usr/bin/env node
// 2019-12-29

const http = require('http');

let timer = 'timer';
console.time(timer);
let client = http.get('http://192.168.235.1:8080', function(res) {
  res.on('close', function() {
    console.timeLog(timer, 'IncomingMessage: close');
  });
  res.on('end', function() {
    console.timeLog(timer, 'IncomingMessage: end');
  });
  res.on('aborted', function(err) {
    console.timeLog(timer, 'IncomingMessage: aborted');
  });
});

client.setTimeout(1000);
  
client.on('timeout', function(err) {
  console.timeLog(timer, 'ClientRequest: timeout');
  client.abort();
});
client.on('error', function(err) {
  console.timeLog(timer, 'ClientRequest: error');
});
client.on('abort', function(err) {
  console.timeLog(timer, 'ClientRequest: abort');
});
