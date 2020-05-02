#!/usr/bin/env node
// 2019-07-31: initial implementation
// 2019-11-22: modified

const os = require('os');

let count = 1;
for(let key in os) {
  if (typeof os[key] === 'function') {
    let value;
    try {
      value = os[key]();
    }
    catch(err) {
      value = err.toString();
    }

    value = JSON.stringify(value).substring(0, 40);
    console.log(`${count++} ${key} => ${value}`);
  }
}
