#!/usr/bin/env node
// 2020-01-06

let server = require('http').createServer();

function showAssoc(message, sock) {
  let local = sock.localAddress + ':' + sock.localPort;
  let remote = sock.remoteAddress + ':'+ sock.remotePort;
  let family = sock.remoteFamily;
  console.log(`${message}: ${local}, ${family}, ${remote}`);
}
  
server.on('request', function(req, res) {
  showAssoc('req', req.socket);
  showAssoc('res', res.socket);
  
  res.writeHead(200, {Connection: 'close'});
  res.end('Hello World', 'utf8');
});

server.listen(8080, '127.0.0.1');
  
