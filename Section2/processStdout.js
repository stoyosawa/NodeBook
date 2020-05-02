#!/usr/bin/env node
// 2019-11-24

let count = 10;
let timer = setInterval(function() {
  count --;
  process.stdout.write('.');
  if (count <= 0) {
    clearInterval(timer);
    console.log('done');
  }
}, 500);
