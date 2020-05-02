#!/usr/bin/env node
// 2019-11-22

const os = require('os');

let step = 0;
let sleep = 30;  // seconds
let timer = setInterval(function procedure() {
  let pid = process.pid;
  console.log(`You have ${sleep}s to do whatever you need to do.`);
  switch(step) {
  case 0:     // Show current priority
    console.log(`${step} Current: ${pid} ${os.getPriority()}`);
    break;
  case 1:     // Change the priority
    os.setPriority(-14);
    console.log(`${step} Changed: ${pid} ${os.getPriority()}`);
    break;
  case 2:     // Task done
    clearInterval(timer);
    console.log('done');
    break;
  default:
    process.exit();
  }
  step++;
  return procedure;
}(), sleep*1000);
