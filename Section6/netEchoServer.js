#!/usr/bin/env node
// 2020-02-15

const net = require('net');

let maxChat = 5;
function Responder(soc) {
  let counter = 0;
  let id = soc.remoteAddress + ':' + soc.remotePort;
  console.log(`Client ${id} connected.`);

  soc.setEncoding('utf8');
  soc.on('data', function(chunk) {
    counter ++;
    chunk = chunk.replace(/[\n\r]/g, '');
    if (counter > maxChat) {
      soc.end();
      return;
    }
    else if (chunk === 'quit') {
      soc.destroy(new Error('Killed by number'));
      return;
    }
    else if (chunk === 'balse') {
      console.log('My eyes. My eyes');
      process.exit(1);
    }
    soc.write(chunk);
    console.log(`Client ${id} ${counter}: ${chunk}`);
  });
  soc.on('close', function() {
    console.log(`Client ${id} closed.`);
  });
  soc.on('error', function(err) {
    console.log(`Client ${id} error: ${err.toString()}`);
  });
}
  
let server = net.createServer();
server.listen(7, 'localhost', function() {
  console.log(`Server started: ${JSON.stringify(server.address())}`);
});
server.on('connection', function(soc) {
  new Responder(soc);
});
