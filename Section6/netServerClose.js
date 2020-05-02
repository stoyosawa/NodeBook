#!/usr/bin/env node
// 2019-02-16

let server = require('net').createServer().listen(8080, 'localhost');

console.time('server');

server.on('connection', function(soc) {
  console.timeLog('server', 'Client came in');
  soc.on('error', function(err) {
    console.timeLog('server', err.toString());
  });
});

setTimeout(function() {
  console.timeLog('server', 'Bye-bye, life.');
  server.close(function() {
    console.timeLog('server', 'I am done.');
  });
}, 3000);
