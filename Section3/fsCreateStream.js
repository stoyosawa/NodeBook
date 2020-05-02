#!/usr/bin/env node
// 2019-12-18

const fs = require('fs');
let fileRead = process.argv[2];
let fileWrite = 'tmp.txt';

let reader = fs.createReadStream(fileRead, {encoding: 'utf8'});
let writer = fs.createWriteStream(fileWrite);

reader.on('data', function(chunk) {
  console.log(`Reaer read ${chunk.length} bytes.`);
  writer.write(chunk.toUpperCase());
});
reader.on('end', function() {
  console.log('reader done');
  writer.end();
});
writer.on('finish', function() {
  console.log('writer done');
});
