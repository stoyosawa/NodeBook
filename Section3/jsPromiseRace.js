#!/usr/bin/env node
// 2019-12-25

const fs = require('fs');

console.time();
let promises = [];
let files = ['jsPromise2x.js', 'jsPromise2b.js', 'jsPromise2c.js'];

files.forEach(function(file) {
  promises.push(new Promise(function(resolve, reject) {
    fs.readFile(file, function(err, data) {
      if (err) {
	reject(err);
	return;
      }
      resolve(`${file}: ${data.length}`);
      console.timeLog('default', `${file} ${data.length}.`);
    });
  }));
});

Promise.race(promises)
  .then(function(value) {
    console.timeLog('default', `Done: ${value}`);
  })
  .catch(function(err) {
    console.timeLog('default', `Error: ${err.toString()}`);
  });
