#!/usr/bin/env node
// 2020-03-21

const events = require('events');

function showEvents(message, event) {
  let names = event.eventNames();
  console.log(`-- ${message}: #${names.length}`);
  for(let name of names) {
    let count = event.listenerCount(name);
    let listeners = event.listeners(name).map(function(func) {
      return `"${func.name}"`;
    }).join(', ');
    console.log(`${name}: ${count} ${listeners}`);
  }
  return;
}

// エミッター作成
let emitter = new events();

// 最初
showEvents('init', emitter);

// eve0 に anonymous function を登録
emitter.on('eve0', function() { return null; });
showEvents('Added anonymous to eve0', emitter);

// eve1 に listener1 を登録
emitter.on('eve1', function listener1() { return 1; });
showEvents('Added listener1 to eve1', emitter);

// eve0 に listenerX を登録
let listenerA = function listnerX() { return 'A'; }
emitter.on('eve0', listenerA);
showEvents('Added listnerX to eve0', emitter);

// eve0 から litenerX を削除
emitter.off('eve0', listenerX);
showEvents('Removed listenerX from eve0', emitter);




