#!/usr/bin/env node
// 2020-04-18

const worker = require('worker_threads');

function showMe(who) {
  console.log(`${who} argv: ${process.argv.length}`);
  console.log(`${who} env: ${Object.keys(process.env).length}`);
  console.error(`${who} stderr`);
}

let option1 = {};
let option2 = {
    argv: Array.from({length: 10}, (elem, idx) => idx),
    env: {
      name: 'Leia Organa',
      father: 'Anakin Skywalker',
      mother: 'Padme Amidala'
    }
};
let option3 = {
    stdout: true,
    stderr: true
};
      
if (worker.isMainThread) {
  new worker.Worker(__filename, option3);
  showMe('Main');
}
else
  showMe('Worker');



