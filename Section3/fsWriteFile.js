#!/usr/bin/env node
// 2019-12-21

const fs = require('fs');

let data = Array.from({length: 10000}, function(elem, idx) {
  return String.fromCharCode((idx % 26) + 65);
}).join('');

fs.writeFile('fileAsync.txt', data, function(err) {
  if (err)
    throw err;
  console.log('Async write done');
});

fs.writeFileSync('fileSync.txt', data);
console.log('Sync write done');
