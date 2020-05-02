#!/usr/bin/env node
// 2019-12-14

function print(method, note, buff) {
  process.stdout.write(`[${method}] ${note}: `);
  console.log(buff);
}

// fill
let bufBase = Buffer.alloc(10);         // 0-filled
print('alloc', '0-filled', bufBase);
let bufFill = bufBase.fill('a');
print('fill', 'a-filled', bufFill);

// map
let bufOdd = bufBase.map(function(elem, idx) {
  return idx * 2 + 1;
});
print('map', 'odd', bufOdd);

// filter
let multiple3 = bufOdd.filter(function(elem) {
  return elem % 3 === 0;
});
print('filter', 'x3 in odd', multiple3);

// every, some
let isAllOdd = bufOdd.every(function(elem) {
  return elem % 2 === 1;
});
print('every', 'is all odd in bufOdd?', isAllOdd);
let isSomeEven = bufOdd.some(function(elem) {
  return elem % 2 === 0;
});
print('some', 'is any even in bufOdd?', isSomeEven);

// includes, find, findIndex
let includesFive = bufOdd.includes(5);
print('includes', 'is 5 in bufOdd?', includesFive);
let hasFive = bufOdd.find(function(elem) {
  return elem === 5;
});
print('find', 'is 5 in bufOdd?', hasFive);
let indexOfFive = bufOdd.findIndex(function(elem) {
  return elem === 5;
});
print('findIndex', 'is 5 in odd?', indexOfFive);

// reduce
let sumOdd = bufOdd.reduce(function(accum, current) {
  return accum + current;
}, 0);
print('reduce', 'sum odd', sumOdd);

// reverse and sort
let random = Array.from(
  {length: 10},
  () => Math.floor(Math.random() * 256)
);
let bufRand = Buffer.from(random);
print('N/A', 'random', bufRand);
bufRand.reverse();
print('reverse', 'reversed random', bufRand);
let sorted = bufRand.sort(function(a, b) {
  return 1 - 2*((0x7F & a)  < (0x7F & b));
}
);
print('sort', 'sorted', sorted);
