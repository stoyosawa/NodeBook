#!/usr/bin/env node
// 2020-01-31

const cluster = require('cluster');

// マスタープロセス
function masterProcess() {
  let worker = cluster.fork();

  cluster.on('fork', function(w) {
    console.log(`cluster.on("fork"): ${w.id}`);
  });
  cluster.on('disconnect', function(w) {
    console.log(`cluster.on("disconnect"): ${w.id}`);
  });
  cluster.on('exit', function(w, code, sig) {
    console.log(`cluster.on("exit"): ${w.id}. ${code} ${sig}.`);
  });

  worker.on('fork', function() {
    console.log(`worker.on("fork"): ${worker.id}`);
  });
   worker.on('disconnect', function() {
    console.log(`worker.on("disconnect"): ${worker.id}`);
  });
  worker.on('exit', function(code, sig) {
    console.log(`worker.on("exit"): ${worker.id}. ${code} ${sig}.`);
  });

  setTimeout(function() {
    worker.kill();
  }, 1000);
}

// ワーカープロセス
function workerProcess() {
  console.log("Worker: I don't do anything ...");
}

// メイン - 親子の切り分け
if (cluster.isMaster)
  masterProcess();
else
  workerProcess();
