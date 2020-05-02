#!/usr/bin/env node
// 2019-12-05

let input = process.stdin;
input.setEncoding('utf8');

let data = [];
input.on('data',  function(c) {
  data.push(c);
  console.log(`data: ${c.length}.`);
});

input.on('end', function() {
  let all = data.join('');
  let paragraphs = all.split('\r\n\r\n');
  console.log(`end: ${paragraphs.length} paragraphs.`);
});
