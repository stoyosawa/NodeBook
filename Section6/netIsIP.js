#!/usr/bin/env node
// 2020-02-11

const net = require('net');

let methods = ['isIP', 'isIPv4', 'isIPv6'];
let addresses = [
  '192.168.0.1',                  // Class C
  '172.16.10.10/24',              // Class B with prefix
  '10.0.0.1:8080',                // Class A with port
  '2001:DB8:0:0:8:800:200C:417A', // Unicast
  '2001:DB8::8:800:200C:417A',    // Unicast
  'FF01::101',                    // Multicast with compression
  '::1',                          // Loopback with compression
  '::',                           // Unspecified with compression
  '0:0:0:0:0:FFFF:129.144.52.38', // IPv4-mapped
  '2001:0DB8:0:CD3::/60',         // With prefix
  '[::1]'                         // URL style
];

let results = [];
for(let addr of addresses) {
  let obj = {};
  obj.address = addr;
  for(let is of methods) {
    obj[is] = net[is](addr);
  }
  results.push(obj);
}

console.table(results);
  
  
