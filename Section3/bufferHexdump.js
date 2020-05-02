#!/usr/bin/env node
// 2019-12-16

let len = 16;             // 1行のバイト数

// stdin から読み込む
process.stdin.on('data', function(chunk) {
  for(let offset=0; offset<chunk.length; offset+=len) {
    let buf16 = chunk.slice(offset, offset+len);
    let hex16 = buf16.toString('hex');
    hex16 = hex16.replace(/([0-9a-z]{2})/g, '$1 ');
    let chr16 = buf16.toString('ascii');
    chr16 = chr16.replace(/[^\x20-\x7e]/g, ' ');
    console.log(hex16.padEnd(len*3+1, ' ') + chr16);
  }
});
