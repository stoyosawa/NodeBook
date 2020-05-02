#!/usr/bin/env node
// 2019-09-17

let loop = 1000;
let report = loop / 10;
let length = 100000;
let list = [];
for(let i=0; i<loop; i++) {
  let alpha = new Array(length).fill(0).map(function(elem) {
    let rnd = Math.floor(Math.random() * 26) + 65;
    return String.fromCharCode(rnd);
  }).join('');
  list.push(alpha);

  // メモリ使用量
  if (i % report === 0) {
    let usage = process.memoryUsage();
    delete usage.external;
    console.log(`${i}: ${JSON.stringify(usage)}`);
  }
}
