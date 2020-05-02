#!/usr/bin/env node
// 2020-03-20

const fs = require('fs');

let file = 'default.txt';

process.stdout.write('Enter filename => ');
process.stdin.on('data', function(buf) {
  file = buf.toString().trim();
  process.stdin.pause();

  // 入れ子
  fs.writeFile(file, 'Hello World', function(err) {
    if (err) {
      console.log(`Failed to write to ${file}: ${err.toString()}`);
      return;
    }
    console.log(`Written to ${file}`);
  });
});
