#!/usr/bin/env node
// 2020-01-06

const http = require('http');
let server = http.createServer();

let message = [
  'HTTP/1.1 400 Bad Request',
  'Content-type: text/plain',
  '',
  'Your request could not be processed. Come again.'
];

server.on('clientError', function(err, sock) {
  console.log(err.toString());
  console.log(err.bytesParsed);
  console.log(err.rawPacket.toString());
  sock.end(message.join('\r\n'));
});

server.listen(8080, '127.0.0.1');



