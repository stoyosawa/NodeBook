#!/usr/bin/env node
// 2019-11-30

function fibonacci(n) {
  if (n === 0)
    return 0;
  if (n === 1)
    return 1;
  return fibonacci(n-2) + fibonacci(n-1);
}

let duration = 10000;       // ms
let count = 10;
let interval = duration / count;

let start = process.cpuUsage();

let timer = setInterval(function() {
  fibonacci(20);
  console.log(process.cpuUsage(start));
  count --;
  if (count === 0)
    clearInterval(timer);
}, interval);
