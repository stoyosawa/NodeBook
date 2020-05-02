#!/usr/bin/env node
// 2020-03-15

let actions = {
  RangeError:
    function() { Number(3.14).toFixed(-1); },
  ReferenceError:
    function() { let x = y; },
  SyntaxError:
    function() { require('LoremIpsum.txt'); },
  TypeError:
    function() { Buffer.alloc('xy'); },
  URIError:
    function() { decodeURI('vogus://www.@$.com.%12345%XXFFDD'); },
  AssertionError:
    function()  { require('assert').strictEqual(1, 2); },
  SystemError:
    function() { require('os').setPriority(-1, 1); }  
}

require('util').inspect.defaultOptions.compact = 10;
require('util').inspect.defaultOptions.breakLength = 200;

for(let [key, value] of Object.entries(actions)) {
  console.log(`--- ${key} ---`);
  try {
    value();
  }
  catch(err) {
    console.log(`Name: ${err.name}`);
    console.log(Object.getOwnPropertyNames(err));
  }
}

