#!/usr/bin/env node
// 2020-02-22

function to10hex(num) {
  let n = 10;
  if (num < 0)
    return num.toString(16);
    
  let withZero = ('0'.repeat(n) + num.toString(16)).slice(-n);
  let array = withZero.match(/[0-9a-z]{2}/g);
  return array.join(' ');
}
  
let rfc868Start = Math.floor(new Date(1900, 1, 1) / 1000);

let tests = [
  '1968-02-19',
  '1970-01-01',
  '2022-02-22',
  '2036-03-08',
  '2038-01-19',
  '2038-01-20'
];

let results = {};
for(let time of tests) {
  let now = Math.floor(new Date(time) / 1000);
  let rfc868 = now - rfc868Start;
  let obj = {
    unix: now,
    unixHex: to10hex(now),
    rfc868: rfc868,
    rfc868Hex: to10hex(rfc868)
  };
  results[time] = obj;
}

console.table(results);
