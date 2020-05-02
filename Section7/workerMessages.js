#!/usr/bin/env node
// 2020-02-02

const worker = require('worker_threads');

function mainThread() {
  let thread = new worker.Worker(__filename);
  thread.on('message', function(message) {
    console.log(`main: worker says: ${message}`);
  });
  thread.on('exit', function(code) {
    console.log(`main: worker exited. Code ${code}`);
  });

  for(let i=0; i<9; i++)
    thread.postMessage(`Main ${i}`);
  thread.postMessage('done');
}

function workerThread() {
  worker.parentPort.on('message', function(message) {
    console.log(`worker: main says: ${message}`);
    if (message === 'done')
      worker.parentPort.close();
//      process.exit(0);
    worker.parentPort.postMessage(`ack ${message}`);
  });
}

if (worker.isMainThread)
  mainThread();
else
  workerThread();
  
