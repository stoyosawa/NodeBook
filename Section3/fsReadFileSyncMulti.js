#!/usr/bin/env node
// 2019-12-18

const fs = require('fs');

let files = ['LoremIpsum.txt',
	     'fsReadFileSyncSingle.js',
	     'fsReadFileSyncMulti.js'];

console.time('perf');

for(let f of files) {
  console.timeLog('perf', `Start reading ${f}`);
  let content = fs.readFileSync(f);
  console.timeLog('perf', `${f} read. ${content.length} bytes.`);
}
console.timeEnd('perf');
