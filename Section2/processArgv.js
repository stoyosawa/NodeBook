#!/usr/bin/env node
// 2019-12-02:

console.log('-- all argv --');  // argv すべて
for(let i=0; i<process.argv.length; i++) {
  console.log(`${i}: ${process.argv[i]}`);
}

console.log('-- skip two --'); // 最初の2つを除く
process.argv.splice(0, 2);
let arg;
while(arg = process.argv.shift()) {
  console.log(arg);
}

console.log('-- options --');  // コマンドラインオプション
for(let exec of process.execArgv) {
  console.log(`Exec: ${exec}`);
}
