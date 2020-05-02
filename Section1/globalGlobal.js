#!/usr/bin/env node
// 2019-11-24

let gObj = Object.getOwnPropertyNames(global);
console.log(gObj.sort(function(a, b) {
  return a.toLowerCase().localeCompare(b.toLowerCase());
}));
console.log(`Total: ${gObj.length}`);
