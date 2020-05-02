#!/usr/local/node-v12.13.1/bin/node
// 2020-01-28

let server = require('http').createServer();
let message = `Hello World from pid ${process.pid}`;

server.on('request', function(req, res) {
  res.writeHead(200, {Connection: 'close'});
  res.write(message, 'utf8');
  res.end();
});

server.listen(8080, '127.0.0.1');
  
