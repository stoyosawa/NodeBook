#!/usr/bin/env node
// 2019-12-25

const fs = require('fs');

console.time();

let reader1 = new Promise(function(resolve, reject) {
  fs.readFile('jsPromise2a.js', function(err, data) {
    if (err) {
      reject(err);
      return;
    }
    resolve(data.length);
    console.timeLog('default', `reader1 ${data.length}.`);
  });
});

let reader2 = new Promise(function(resolve, reject) {
  fs.readFile('jsPromise2b.js', function(err, data) {
    if (err) {
      reject(err);
      return;
    }
    resolve(data.length);
    console.timeLog('default', `reader2 ${data.length}.`);
  });
});

let reader3 = new Promise(function(resolve, reject) {
  fs.readFile('jsPromise2c.js', function(err, data) {
    if (err) {
      reject(err);
      return;
    }
    resolve(data.length);
    console.timeLog('default', `reader3 ${data.length}.`);
  });
});

Promise.all([reader1, reader2, reader3])
  .then(function(list) {
    console.timeLog('default', list.reduce(function(accum, current) {
      return accum+current;
    }));
  })
  .catch(function(err) {
    console.timeLog('default', `Error: ${err.toString()}`);
  });
