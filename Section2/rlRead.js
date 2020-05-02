#!/usr/bin/env node
// 2019-12-09

const readline = require('readline');

let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

let lines = 0;
let bytes = 0;

rl.on('line', function(line) {
  console.log(`Line read: ${line.length}`);
  console.log(Buffer.from(line));
  lines ++;
  bytes += line.length;
});
rl.on('close', function() {
  console.log(`#Lines: ${lines}, #Bytes: ${bytes}.`);
});
