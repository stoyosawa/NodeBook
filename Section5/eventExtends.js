#!/usr/bin/env node
// 2019-11-03

const EventEmitter = require('events');

class PrimeClass extends EventEmitter{
  constructor(target) {
    super();
    this.target = target;
    this.count= 2;
    this.list = [];
    this.half = Math.floor(this.target * 0.5);
  }
  
  run() {
    let that = this;
    process.nextTick(function() {
      while(that.count < that.target) {
	if (that.count === that.half)
	  that.emit('half', that.list[that.list.length -1]);

	let firstFactor = that.list.find(function(elem) {
	  return that.count % elem === 0;
	});
	if (firstFactor === undefined) {
	  that.list.push(that.count);
	}
	that.count ++;
      }

      that.emit('done', that.list[that.list.length - 1]);
    });
    return that;
  }
}

let num = parseInt(process.argv[2]) || 1000000; // 百万
let prime = new PrimeClass(num).run();
prime.on('half', function(p) {
  console.log(`Half-way through: ${p}`);
});
prime.on('done', function(p) {
  console.log(p);
});
console.log('Started computing primes');
