#!/usr/local/node-v12.13.1/bin/node
// 2020-01-28

const child_process = require('child_process');

function logger(msg) {
  let d = Date.now().valueOf();
  console.log(`${d} parent: ${msg}`);
}

let fork = child_process.fork('./childForkChild.js');
logger(`PID ${process.pid}`);
logger(`Child PID: ${fork.pid}`);

fork.on('message', function(message) {
  logger(`From child: ${message}`);
  fork.send(`Thank you for ${message}.`);
});
fork.on('disconnect', function() {
  logger('Channel disconneced');
});
fork.on('exit', function(code) {
  logger(`Child exited: ${code}`);
});

setTimeout(function() {
//  fork.disconnect();
  fork.kill('SIGTERM');
}, 6500);
