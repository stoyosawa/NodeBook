#!/usr/bin/env node
// 2020-04-18

const worker = require('worker_threads');

function mainThread() {
  let thread = new worker.Worker(__filename);

  thread.on('error', function(err) {
    console.log(`error: ${err.toString()}`);
  });
  thread.on('exit', function(code) {
    console.log(`exit: ${code}`);
  });
  thread.on('online', function() {
    console.log('online');
  });
}

function workerThread() {
  setTimeout(function() {
    throw new Error('I have a problem');
  }, 1000);
}

if (worker.isMainThread)
  mainThread();
else
  workerThread();



