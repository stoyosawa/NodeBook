#!/usr/bin/env node
// 2019-12-23

const fs = require('fs');

let watcher = fs.watch(process.argv[2]);
watcher.on('change', function(event, file) {
  console.log(`Changed: ${event} ${file}.`);
  if (event === 'rename')
    watcher.close();
});
watcher.on('close', function() {
  console.log('Stopped watching.');
});
watcher.on('error', function(err) {
  console.log(`Error: ${err.toString()}.`);
});
