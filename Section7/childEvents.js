#!/usr/bin/env node
// 2020-04-15

const child_process = require('child_process');

let cmds = ['ls /tmp', 'ls /x'];
let cmd = cmds[parseInt(process.argv[2]) || 0];

let exec = child_process.exec(cmd);
			      
exec.on('close', function(code, signal) {
  console.log(`close: code ${code}, signal ${signal}`);
});
exec.on('disconnect', function() {
  console.log('diconneect');
});
exec.on('error', function(err) {
  console.log(`error: ${err.toString()}`);
});
exec.on('exit', function(code, signal) {
  console.log(`exit: code ${code}, signal ${signal}`);
});
exec.on('message', function(message, handle) {
  console.log(`message: ${message}`);
});
