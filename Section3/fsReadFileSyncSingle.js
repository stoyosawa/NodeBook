#!/usr/bin/env node
// 2019-12-18

const fs = require('fs');
const path = require('path');

let file = process.argv[2] || process.argv[1];
let content = fs.readFileSync(file, {
  encoding: 'hex',  // デフォルト null
  flag: 'r'         // デフォルト 'r'
});
console.log(`${path.basename(file)} read. `);
console.log(content);
