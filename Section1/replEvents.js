#!/usr/bin/env node
// 2019-11-14

const repl = require('repl');

let replServer = repl.start();

replServer.on('exit', function() {
  console.log('REPL ends. Thank you and come again.');
});

replServer.on('reset', function() {
  console.log('you have cleared the context.');
});

console.log('Repl started');
