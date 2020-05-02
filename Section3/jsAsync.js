#!/usr/bin/env node
// 2019-09-04

function sleeper(time) {
  return new Promise(function(resolve) {
    setTimeout(function() {
      resolve(`Slept ${time}ms`);
    }, time);
  });
}

let label = 'sleep';
console.time(label);

async function sleep() {
  let value;
  value = await sleeper(1000);
  console.timeLog(label, `${value}`);

  value = await sleeper(1500);
  console.timeLog(label, `${value}`);

  value = await sleeper(800);
  console.timeLog(label, `${value}`);
}
sleep();
