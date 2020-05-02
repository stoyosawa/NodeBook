#!/usr/bin/env node
// 2019-11-03

const events = require('events');

let emitter = new events();
console.log(`Step 0: ${emitter._eventsCount}`);

emitter.on('multiple', function() {
  console.log(`on: ${emitter._eventsCount}`);
});
console.log(`Step 1: ${emitter._eventsCount}`);

emitter.once('single', function() {
  console.log(`once: ${emitter._eventsCount}`);
});
console.log(`Step 2: ${emitter._eventsCount}`);

for(let i=0; i<3; i++) {
  for(let eve of ['multiple', 'single']) {
    emitter.emit(eve);
  }
}

