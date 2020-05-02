#!/usr/bin/env node
// 2020-02-01
// Run 'ps -L -C node -o pid,ppid,lwp,psr,cmd' to get the threads

const worker = require('worker_threads');

function mainThread() {
  console.log('Main: Started.');
  new worker.Worker(__filename);
  process.on('exit', function(code) {
    console.log('Main: Existed.');
  });
}

function workerThread() {
  console.log(`Worker: Started. ID ${worker.threadId}`);
  setTimeout(function() {
    console.log('Worker: Done.');
  }, 2000);
}

if (worker.isMainThread)
  mainThread();
else
  workerThread();



