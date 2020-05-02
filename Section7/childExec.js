#!/usr/bin/env node
// 2020-01-22

const child_process = require('child_process');

let cmds = [
  'curl -I http://google.com/',  // 成功
  'ls /x'                        // エラー
];
let cmd = cmds[parseInt(process.argv[2] || 0)];

let exec = child_process.exec(cmd, function(err, stdout, stderr) {
  if (err) {
    console.log(`Err: "**${err.toString()}**"`);
    return;
  }
  console.log(`stdout: "**${stdout}**"`);
  console.log(`stderr: "**${stderr}**"`);
});

console.log('Started');
