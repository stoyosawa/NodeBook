#!/usr/bin/env node
// 2019-11-24

let input = process.stdin;

input.on('data',  function(c) {
  console.log(`data: ${c.length} bytes.`);
  if (c.toString().includes('end'))
    console.log(input.destroy('Killing me softly').constructor.name);
});

input.on('end', function() {
  console.log('end');
});

input.on('close', function() {
  console.log('close');
});

input.on('error', function(err) {
  console.log(`error: ${err.toString()}.`);
});
