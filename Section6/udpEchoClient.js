#!/usr/bin/env node
// 2019-11-03

const dgram = require('dgram');
let client = dgram.createSocket('udp4');
client.connect(7, '192.168.13.1');

let messages = [
  "Una furtiva lagrima",
  "Negli occhi suoi spunto",
  "Quelle festose giovani",
  "Invidiar sembro",
  "Che più cercando io vo'",
  "M'ama, lo vedo"
];

client.on('connect', function() {
  let timer = setInterval(function() {
    let message = messages.shift();
    if (message === undefined) {
      console.log('Done');
      client.close();
      clearTimeout(timer);
      return;
    }      
    console.log(`Send: ${message}`);
    client.send(message);
  }, 1000);
});

client.on('message', function(message, rinfo) {
  console.log(`Got: ${message}`);
});

client.on('error', function(err) {
  console.log(`Error: ${err.toString()}`);
  client.close();
});
