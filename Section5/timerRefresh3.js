#!/usr/bin/env node
// 2020-01-15
// For event loop, see https://blog.hiroppy.me/entry/nodejs-event-loop

let label = 'repeater';
console.time(label);

let timer = setTimeout(function() {
  console.timeLog(label, 'Repeating');
  timer._idleTimeout = Math.floor(Math.random() * 3000);
  timer.refresh();
}, Math.floor(Math.random() * 3000)); // 

