#!/usr/bin/env node
// 2019-06-02: fs Promises API
// Since v10. Experimental

const fsPromises = require('fs').promises;

let label = 'fileOps';
console.time(label);

let file1 = 'test.txt';
let file2 = 'renamed.txt';

async function fileOp() {
  await fsPromises.writeFile(file1, 'Hello World. ');
  console.timeLog(label, 'writeFile: No return.');

  await fsPromises.appendFile(file1, 'Bonjour Monde.');
  console.timeLog(label, 'appendFile: No return.');

  let data = await fsPromises.readFile(file1, 'utf8');
  console.timeLog(label, 'readFile: ' + data.length);

  await fsPromises.truncate(file1, 10);
  console.timeLog(label, 'truncateFile: No return.');

  await fsPromises.rename(file1, file2);
  console.timeLog(label, 'renameFile: No return.');
  
}
fileOp();
