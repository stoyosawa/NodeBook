#!/usr/bin/env node
// 2020-04-11

let count = 0;
let label = 'timer';
console.time(label);

let heartbeat = setInterval(function() {
  console.timeLog(label, `${++ count}:${heartbeat.hasRef()} `);
  if (count === 5) {
    // clearInterval(this);
    this.unref();
    console.timeLog(label, `Done:${heartbeat.hasRef()}`);
  }
}, 1000);

console.timeLog(label, `Ref: ${heartbeat.ref() === heartbeat}`);

