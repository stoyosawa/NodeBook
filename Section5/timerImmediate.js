#!/usr/bin/env node
// 2020-01-15

function prime(n) {
  let count = 2;
  let list = [];

  while(count < n) {
    let firstFactor = list.find(function(elem) {
	  return count % elem === 0;
    });
    if (firstFactor === undefined)
      list.push(count);

    count ++;
  }
  return list;
}

let label = 'immediate';
console.time(label);
setImmediate(function() {
  console.timeLog(label, 'Immediate done.');
});

let n = 100000;  // 10万
console.timeLog(label, `Primes < ${n}: ${prime(n).length}`);
