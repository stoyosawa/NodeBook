#!/usr/bin/env node
// 2020-01-01
// see also
// https://github.com/nodejs/node/issues/21822
// https://blog.hiroppy.me/entry/nodejs-event-loop
// https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/

function fibonacci(n) {
  if (n === 0)
    return 0;
  if (n === 1)
    return 1;
  return fibonacci(n-2) + fibonacci(n-1);
}

function runme(str) {
  return function() {
    console.timeLog(label, str);
  };
}

let label = 'order';
console.time(label);

setTimeout(runme('setTimeout'), 0);    // 0 = immediate
setImmediate(runme('setImmediate'));
process.nextTick(runme('nextTick'));
Promise.resolve().then(runme('promise'));
runme(`main ${fibonacci(40)}`)();
