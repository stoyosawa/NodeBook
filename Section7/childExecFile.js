#!/usr/bin/env node
// 2020-04-17

const child_process = require('child_process');

let internals = [
//  'cd', 'cls', 'dir', 'exit', 'path', 'rem', 'title'
  'cls'
];

let runMe = function(cmd, sh) {
  let child = child_process.execFile(cmd, {shell: sh});
  let head = `${cmd}/${sh}(${child.pid})`;
  
  child.on('exit', function(code, signal) {
    console.log(`${head} exit: ${code}, ${signal}`);
  });
  child.on('error', function(err) {
    console.log(`${head} err: ${err.toString()}`);
  });
  child.stdout.on('data', function(chunk) {
    console.log(`${head} stdout: ${chunk.length} bytes`);
    console.log(Buffer.from(chunk));
  });
  child.stderr.on('data', function(chunk) {
    console.log(`${head} stderr: ${chunk.length} bytes`);
  });
};

for(let shell of [true, false]) {
  for(let cmd of internals) {
    runMe(cmd, shell);
  }
}
