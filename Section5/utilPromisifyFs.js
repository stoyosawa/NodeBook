#!/usr/bin/env node
// 2019-09-14

const util = require('util');
const fs = require('fs');

let mkdir = util.promisify(fs.mkdir);
let write = util.promisify(fs.writeFile)
let stat = util.promisify(fs.stat);
let rename = util.promisify(fs.rename);

let dir = './test';
let file = 'test1.txt';
let fileNew = 'test2.txt';
let label = 'waterfall';
console.time(label);

async function waterfall() {
  console.timeLog(label, 'Started');

  await mkdir(dir);
  process.chdir(dir);
  console.timeLog(label, `${dir} created`);

  await write(file, 'hello world');
  console.timeLog(label, `${file} created.`);

  let res = await stat(file);
  console.timeLog(label, `Size ${res.size}`);

  await rename(file, fileNew);
  console.timeLog(label, `Renamed: ${file} > ${fileNew}`);
};
waterfall();


