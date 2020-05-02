#!/usr/bin/env node
// 2020-01-30

const cluster = require('cluster');

// マスタープロセス (Sidious)
function masterProcess() {
  console.log(`Sidious: PID ${process.pid}`);
  let worker = cluster.fork();
  console.log(`Sidious: Worker ID ${worker.id} forked.`);
}

// ワーカープロセス (Vader)
function workerProcess() {
  console.log(`Vader: PID ${process.pid}; PPID ${process.ppid}`);
  console.log(`Vader: ID ${cluster.worker.id}`);
  process.exit();
}

// メイン - 親子の切り分け
if (cluster.isMaster)
  masterProcess();
else
  workerProcess();
