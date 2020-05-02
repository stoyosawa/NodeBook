#!/usr/bin/env node
// 2020-02-09

const dns = require('dns');
let ip = '49.212.180.206';
let ptr = ip.split('.').reverse().join('.') + '.in-addr.arpa';

function handler(name) {
  return function(err, domain) {
    if(err)
      console.log(`${name}: Error: ${err.toString()}`);
    else
      console.log(`${name}: ${JSON.stringify(domain)}`);
  };
}
  
dns.resolvePtr(ptr, handler('Ptr'));
dns.reverse(ip, handler('Reverse'));
  
