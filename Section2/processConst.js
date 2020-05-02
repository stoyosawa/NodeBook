#!/usr/bin/env
// 2019-11-23

let prop = [
  'arch', 'config', 'env',  'execPath', 'pid',
  'platform', 'ppid', 'release', 'title', 'version', 'versions'
];

let count = 1;
for(let p of prop) {
  value = JSON.stringify(process[p]).slice(0, 50);
  console.log(`${count++} ${p} => ${value}`);
}
