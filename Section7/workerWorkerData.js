#!/usr/bin/env node
// 2020-02-01
// Run 'ps -L -C node -o pid,ppid,lwp,psr,cmd' to get the threads

const worker = require('worker_threads');

function fibonacci(n) {
  if (n === 0)
    return 0;
  if (n === 1)
    return 1;
  return fibonacci(n-2) + fibonacci(n-1);
}

function now(start) {
  return Date.now() - start;
}

let nThreads = 4;
function mainThread() {
  let start = Date.now();
  console.log(`${now(start)}: main${worker.threadId} started.`);

  for(let i=0; i<nThreads; i++) {
    let thread = new worker.Worker(__filename, {workerData: start});
    thread.on('exit', function(code) {
      console.log(`${now(start)}: main${i+1} exited. Code ${code}`);
    });
  }
}

function workerThread() {
  let start = worker.workerData;
  let id = worker.threadId;
  console.log(`${now(start)}: work${id} started.`);
  let f = fibonacci(40);
  console.log(`${now(start)}: work${id} ${f}`);
}

if (worker.isMainThread)
  mainThread();
else
  workerThread();



