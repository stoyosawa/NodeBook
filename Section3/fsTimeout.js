#!/usr/bin/env node
// 2019-11-11: Only for Unix

const fs = require('fs');
let zero = '/dev/zero';

function closeMe(reason) {
  console.log(`Closing by ${reason}. ${byteCount} read so far.`);
  stream.destroy();
}

// timeout または size
let condition = process.argv[2] || 'timeout';

// 終了条件
let byteMax = 100000;
let timeout = 2000;
let byteCount = 0;

let stream = fs.createReadStream(zero);
stream.on('data', function(chunk) {
  byteCount += chunk.length;
  if (condition === 'size' && byteCount > byteMax)
    closeMe('by size');
});
stream.on('close', function() {
  console.log('closed');
});
stream.on('end', function() {
  console.log('EoF');
});
stream.on('error', function(err) {
  console.log(`Error: Possibly you don't have ${zero}.
${err.toString()}`);
  return;
});

if (condition === 'timeout') {
  setTimeout(function() {
    closeMe('timeout');
  }, timeout);
}


