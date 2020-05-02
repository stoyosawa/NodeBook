#!/usr/bin/env node
// 2019-09-29

const net = require('net');

function callback(cmd) {
  console.timeLog('ftp', `${cmd} sent.`);
}

console.time('ftp');
let client = net.createConnection(21, 'space.mit.edu');

client.on('connect', function() {
  let local = JSON.stringify(client.address());
  console.timeLog('ftp', `connect: ${local}`);
});
client.on('data', function(chunk) {
  console.timeLog('ftp', `data: ${chunk}`);
});
client.on('end', function() {
  console.timeLog('ftp', 'end: FIN from the server.');
});
client.on('close', function() {
  console.timeLog('ftp', 'close: Connection closed (fully).');
});

process.on('exit', function(code) {
  console.timeLog('ftp', `Exit with ${code}`);
});

client.setEncoding('utf8');
client.write('USER ftp\r\n', callback('USER'));
client.write('PASS s.toyosawa@f5.com\r\n', callback('PASS'));
client.write('PWD\r\n', callback('PWD'));

client.setTimeout(1000, function() {
  client.end('QUIT\r\n', callback('QUIT'));
});
