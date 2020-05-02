#!/usr/bin/env node
// 2019-11-24

process.stdin.on('data',  function(c) {
  console.log(`Got ${c.length}. Type: ${c.constructor.name}`);
  console.log(c);
  if (c.startsWith('quit'))
    process.exit();
});
