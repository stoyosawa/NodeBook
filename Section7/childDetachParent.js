#!/usr/local/node-v12.13.1/bin/node
// 2020-01-28

const child_process = require('child_process');

let fork = child_process.fork('./childDetachChild.js', {
  detached: true,
  stdio: 'ignore'
});
console.log(`${fork.pid} started.`);
console.log(`${process.pid} exiting.`);
process.exit(0);
