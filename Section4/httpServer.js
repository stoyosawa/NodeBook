#!/usr/bin/env node
// 2020-01-06

let server = require('http').createServer();
server.on('request', function(req, res) {
  // req := IncomingMessage
  console.log(`Received: ${req.method} ${req.url}.`);
  for(let [key, val] of Object.entries(req.headers)) {
    console.log(`${key}: ${val}`);
  }

  // res := ServerResponse
  res.setHeader('Connection', 'close');
  res.setHeader('Age', 100);
  res.writeHead(200, "All Good", {
    'Content-type': 'text/plain',
    'Server': 'Node.js'
  });
  res.write('Hello World');
  res.end();
});

server.listen(8080, '127.0.0.1');
  
