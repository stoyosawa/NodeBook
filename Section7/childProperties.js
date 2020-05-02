#!/usr/bin/env node
// 2020-01-22

const child_process = require('child_process');

let cmds = [
  'cat /usr/local/node/LICENSE',  // 成功
  'cat /tmp/nofile'               // エラー
];
let cmd = cmds[parseInt(process.argv[2] || 0)];

let exec = child_process.exec(cmd);
console.log(`Child: ${exec.pid}`);
console.log(`Parent: ${process.pid}`);

let size = 0;
exec.stdout.on('data', function(chunk) {
  size += chunk.length;
  console.log(`stdout: ${chunk.length}`);
});
exec.stdout.on('close', function() {
  console.log(`stdout: Total ${size}`);
});
exec.stderr.on('data', function(chunk) {
  console.log(`stderr: ${chunk.length}`);
});

