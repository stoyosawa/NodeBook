#!/usr/bin/env node
// 2020-01-16

const https = require('https');
const {primeGenerator} = require('./jsGenPrime');

let label = 'timer';
console.time(label);

function httpsGet() {
  https.get('https://www.amazon.co.jp/', function(res) {
    let code = res.statusCode;
    let count = 0;
    res.on('data', function(chunk) {
      console.timeLog(label, `chunk ${chunk.length}`);
      count += chunk.length;
    });
    res.on('end', function() {
      console.timeLog(label, `HTTP ${code} ${count}`);
      process.exit();
    });
  });
}

let i = 0;
function immediatePrime(generator) {
  setImmediate(function() {
    console.timeLog(label, `Prime ${++i} ${generator.next().value}`);
    immediatePrime(generator);
  });
}
    
httpsGet();
immediatePrime(primeGenerator());
  
