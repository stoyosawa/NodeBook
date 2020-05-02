#!/usr/bin/env node
// 2019-11-21

const fs = require('fs');
const {Console} = require('console');

let logFileName = 'consoleToFileLog.txt';
let logStream = fs.createWriteStream(
  logFileName, {flags: 'a'}
);
let console = new Console({
  stdout: logStream,
  stderr: process.stderr
});

console.log('Logging to stdout');
console.debug('Loggin to debug (same as stdout)');
console.info('Loggin to info (same as stdout)');
console.error('Logging to stderr');
console.warn('Logging to warn (same as stderr)');
