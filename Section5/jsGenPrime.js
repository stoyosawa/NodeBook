#!/usr/bin/env node
// 2019-09-29

function *primeGenerator() {  // ジェネレータ版
  let count = 2;
  let list = [];
  
  while(true) {
    let firstFactor = list.find(function(elem) {
      return count % elem === 0;
    });
    if (firstFactor === undefined) {
      yield count;
      list.push(count);
    }
    count ++;
  }
}

class primeClass {           // クラス版
  constructor() {
    this.count= 2;
    this.list = [];
  }
  
  next() {
    while(true) {
      let that = this.count;
      let firstFactor = this.list.find(function(elem) {
	return that % elem === 0;
      });
      if (firstFactor === undefined) {
	this.list.push(this.count);
	return this.count;
      }
      this.count ++;
    }
  }
}
  
module.exports = {
  primeGenerator: primeGenerator,
  primeClass: primeClass
}

if (require.main === module) {
  let pGen = primeGenerator();
  let pClass = new primeClass();
  for(let i=0; i<500; i++) {
    console.log(`${i} ${pGen.next().value} ${pClass.next()}`);
  }
}
