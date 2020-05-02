#!/usr/bin/env node
// 2020-01-15

let monsters = ['Slime', 'Raven', 'Froggore', 'Anteater'];

function rand(N) {
  return Math.floor(Math.random() * N);
}

let label = 'dragon';
console.time(label);

setInterval(function() {
  let monster = monsters[rand(monsters.length)];
  console.timeLog(label, `${monster} appears!`);
  this._idleTimeout = rand(5000);
}, rand(5000));
