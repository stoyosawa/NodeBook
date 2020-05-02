#!/usr/bin/env node
// 2020-03-15

const net = require('net');
const fs = require('fs');
const os = require('os');

let actions = {
  'socket error':
    function() { new net.Socket({fd: 100}); },
  'file write permission denied':
    function() { fs.writeFileSync('sat.txt', 'hello'); }, 
  'failed to rename':
    function() { fs.renameSync(__filename, 'sat.txt'); },
  'wrong directory':
    function() { process.chdir('C:/tmp'); },
  'wrong PID':
    function() { os.setPriority(-1, 1); },
}

require('util').inspect.defaultOptions.compact = 10;
Error.stackTraceLimit = 0;

for(let [key, value] of Object.entries(actions)) {
  try {
    value();
  }
  catch(err) {
    console.log(`--- ${err.name}: ${key} ---`);
    console.log(err);
  }
}
