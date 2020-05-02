#!/usr/bin/env node
// 2020-01-16

function fibonacci(n) {
  if (n === 0)
    return 0;
  if (n === 1)
    return 1;
  return fibonacci(n-2) + fibonacci(n-1);
}

let label = 'immediate';
console.time(label);

setImmediate(function() {
  console.timeLog(label, 'Immediate done.');
});

process.nextTick(function() {
  console.timeLog(label, 'nextTick done.');
});

console.timeLog(label, `Fibonacci: ${fibonacci(40)}`);
