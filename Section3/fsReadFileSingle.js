#!/usr/bin/env node
// 2019-12-18

const fs = require('fs');

let file = process.argv[2];
fs.readFile(file, function(err, data) {
  if (err) {
    console.log(err.toString());
    return;
  }
  console.log(`No err: ${err}.
Type ${data.constructor.name}.
Read ${data.length} bytes.`);
});
