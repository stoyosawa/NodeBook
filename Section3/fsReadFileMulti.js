#!/usr/bin/env node
// 2019-12-19

const fs = require('fs');

let files = ['LoremIpsum.txt',
	     'fsReadFileSyncSingle.js',
	     'fsReadFileSyncMulti.js'];

console.time('perf');

for(let f of files) {
  console.timeLog('perf', `Start reading ${f}`);
  fs.readFile(f, function(err, data) {
    console.timeLog('perf', `${f} read. ${data.length} bytes.`);    
  });
}
console.timeLog('perf');
