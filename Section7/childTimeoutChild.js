#!/usr/bin/env node
// 2020-04-13

const child_process = require('child_process');
const fs = require('fs');
let timeout = 1000;        // 1s

function child() {
  let file = 'res.txt';
  fs.writeFileSync(file, 'Child started.\n');
  
  process.on('SIGTERM', function() {
    fs.appendFileSync('res.txt', 'SIGTERM received.\n');
  });
  process.on('SIGINT', function() {
    fs.appendFileSync('res.txt', 'SIGINT received.\n');
  });

  setTimeout(function() {
    console.log(`Ends after ${timeout+500}`);
  }, timeout+500);
}

function parent() {
  let result = 'No data';
  try {
    result = child_process.execSync(`node ${__filename} child`, {
      encoding: 'utf8',
      timeout: timeout,
      killSignal: 'SIGTERM'
    });
  }
  catch(err) {
    console.log(`Err: ${err.toString()}`);
  }
  console.log(`Result: ${result}`);
}

let startMe = {
  child: child,
  parent: parent
};
startMe[process.argv[2] || 'parent']();


