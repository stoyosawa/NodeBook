#!/usr/bin/env node
// 2019-11-21

const fs = require('fs');
const {Console} = require('console');

let devices = { "win32": "\\\\.\\nul",
		"unix": "/dev/null" }
let fsNull = fs.createWriteStream(devices[process.platform]);
let logNull = new Console({
  stdout: process.stdout,
  stderr: fsNull
});

logNull.log('Logging to stdout');
logNull.debug('Loggin to debug (same as stdout)');
logNull.info('Loggin to info (same as stdout)');
logNull.error('Logging to stderr');
logNull.warn('Logging to warn (same as stderr)');
