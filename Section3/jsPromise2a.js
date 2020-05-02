#!/usr/bin/env node
// 2019-12-25

const fs = require('fs');

new Promise(function(resolve, reject) {
  process.stdout.write('Enter filename => ');
  process.stdin.on('data', function(buf) {
    file = buf.toString().trim() || 'default.txt';
    resolve(file);
    process.stdin.pause();
  });
})
  .then(function(file) {
    return new Promise(function(resolve, reject) {
      fs.writeFile(file, 'hello World', function(err) {
	if (err) {
	  reject(err);
	  return;
	}
	resolve(`Written to ${file}`);
      });
    });
  })
  .then(function(result) {
    console.log(result);
  })
  .catch(function(err) {
    console.log(err.toString());
  });
