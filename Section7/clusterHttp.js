#!/usr/bin/env node
// 2020-04-18

const cluster = require('cluster');
const http = require('http');
const child_process = require('child_process');
const os = require('os');

let nWorkers = 4;

function masterProcess() {
  console.log(`#CPU ${os.cpus().length}; PID ${process.pid}`);

  for(let i=0; i<nWorkers; i++) {
    cluster.fork();
  }

  cluster.on('message', function(w, message) {
    console.log(`ID${w.id}: ${message}`);
  });
}  

function childProcess() {
  let wid = cluster.worker.id;
  let pid = process.pid;
  let cpu = 'x';
  
  if (os.platform() === 'linux')
    cpu = child_process.execSync(`ps -h -p ${pid} -o psr`,
				 {encoding: 'utf8'}).match(/\d/g)[0];

  process.send(`id${wid} started: pid${pid}, cpu${cpu}`);

  let server = http.createServer();
  server.on('request', function(req, res) {
    process.send(`id${wid}: Received ${req.method}`);
    res.writeHead(200, {Connection: 'close'});
    res.write('May the Force be with you.');
    res.end();
  });
  server.listen(8080, 'localhost');
}

if (cluster.isMaster)
  masterProcess();
else
  childProcess();
  

  
  
