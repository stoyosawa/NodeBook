#!/usr/bin/env node
// 2020-02-15

const os = require('os');
const net = require('net');

let pathList = {
  linux: '/tmp/tstSocket',
  win32: '\\\\.\\pipe\\tstSocket'
}
let path = pathList[os.platform()];

let epoch = new Date(1900, 1, 1);

function server() {
  let server = net.createServer().listen(path);
  server.on('listening', function() {
    console.log(`Listening on ${path}`);
  });
  server.on('connection', function(soc) {
    let current = Math.floor((Date.now() - epoch) / 1000);
    let time = Buffer.alloc(4);
    time.writeUInt32BE(current);
    soc.end(time);
    console.log(`Send ${current.toString(16)} (${current})`);
  });

  process.on('SIGINT', function() {
    console.log('Exiting');
    server.close();
  });
}

function client() {
  let client = net.createConnection(path);
  client.on('data', function(chunk) {
    let timeInt = chunk.readUInt32BE();
    let timeHex = timeInt.toString(16);
    let time = new Date(timeInt * 1000 + epoch.getTime());
    console.log(`${timeHex} ${timeInt} ${time}`);
  });
  client.on('close', function() {
    console.log('closed');
  });
}

let startMe = {
  server: server,
  client: client
}
startMe[process.argv[2] || 'client']();
