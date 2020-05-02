#!/usr/bin/env node
// 2020-03-15

const http = require('http');

function get() {
  return new Promise(function(resolve, reject) {
    let client = http.get(process.argv[2], function(res) {
      let length = 0;
      res.on('data', function(chunk) {
	length += chunk.length;
      });
      res.on('end', function() {
	resolve(length);
      });
    });
    client.on('error', function(err) {
      reject(err);
    });
  });
}

async function runme() {
  try {
    let res = await get();
    console.log(`Success: ${res} bytes`);
  }
  catch(err) {
    console.log('Error in async: ', err);
  }
};
runme();
