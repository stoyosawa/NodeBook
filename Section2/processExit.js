#!/usr/bin/env node
// 2019-11-23

let code = Math.floor(Math.random() * 256);
console.log(`Exiting with code ${code}`);
process.exit(code);         // default 0.
