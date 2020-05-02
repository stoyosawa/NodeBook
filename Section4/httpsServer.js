#!/usr/bin/env node
// 2020-01-06

const https = require('https');
const fs = require('fs');

// 最初に秘密鍵と証明書を読む
let privateKey = fs.readFileSync('./keys/ServerPrivate.key');
let cert = fs.readFileSync('./keys/ServerCertificate.crt');

let options = {
  key: privateKey,
  cert: cert,
  passphrase: 'Joana'
}

let server = https.createServer(options, function(req, res) {
  console.log(`Received: ${req.method}.`);
  res.writeHead(200, {Connection: 'close'});
  res.end('Hello protected world.', 'utf8');
});
server.listen(8081, '127.0.0.1');

server.on('secureConnection', function(sock) {
  console.log('Handshake completed');
  console.log(sock.getCipher());
});
  
