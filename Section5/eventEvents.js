#!/usr/bin/env node
// 2020-03-21

const events = require('events');

let emitter = new events();
emitter.on('newListener', function(event, listener) {
  console.log(`${event} => "${listener.name}" registered`);
});
emitter.on('removeListener', function(event, listener) {
  console.log(`${event} => "${listener.name}" removed`);
});

let listenerX = function() { return null };
emitter.on('eve', listenerX);
console.log(`Emitted eve: ${emitter.emit('eve')}`);
emitter.off('eve', listenerX);


