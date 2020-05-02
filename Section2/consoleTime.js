#!/usr/bin/env node
// 2019-08-25

function gcd(n, m) {
  if (m > n)
    [m, n] = [n, m];
  if (m === 0)
    return n;
  let r = n % m;
  return gcd(m, r);
}

// JavaScript の Date() - msec 単位
let sDate = Date.now();
let gDate = gcd(2*3*5*7, 3*5);
let dDate = Date.now() - sDate;
console.log(`js Date: ${dDate}ms ${gDate}`);

// process.hrtime() もある - nsec 単位
let sHires = process.hrtime();
let gHires = gcd(2*7*11*13*17, 11*17);
let dHires = process.hrtime(sHires);
console.log(`process hires: ${dHires[1]}ns ${gHires}`);

// process.hrtime.bigint() は bigint だけ返す
let sBigint = process.hrtime.bigint();
let gBigint = gcd(5*11*13, 5*13);
let dBigint = process.hrtime.bigint();
console.log(`process bigint: ${dBigint-sBigint}ns ${gBigint}`);

// console.time() も ms
console.time();                 // default: 'default'
console.timeLog('default', gcd(5*13, 4*13));
console.timeEnd();

console.time('cumulative');
for(let i=1; i<=10; i++) {
  console.timeLog('cumulative', i, gcd(5*13*i, 4*13));
}
