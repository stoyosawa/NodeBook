#!/usr/bin/env node
// 2019-11-24

const os = require('os');

console.log(`Process ID: ${process.pid}`);
let signals = ['SIGHUP', 'SIGINT', 'SIGQUIT', 'SIGTERM'];

for(let sig of signals) {
  let num = os.constants.signals[sig];
  process.on(sig, function() {
    console.log(`${sig}(${num}) received.`);
  });
}

setInterval(function() {
  console.log('.');
}, 5000);
