#!/usr/bin/env node
// 2019-12-01

const readline = require('readline');

let count = 50;
// let spinner = ['|', '/', '-', '\\'];   // ASCII
let spinner = ['｜', '／', '－', '＼'];    // UTF8

process.stdout.write('  Counting ....');
let timer = setInterval(function() {
  readline.cursorTo(process.stdout, 0, function() {
    let pos = count % spinner.length;
    process.stdout.write(spinner[pos]);
  });
  count --;
  if (count === 0)
    clearInterval(timer);
}, 100);
