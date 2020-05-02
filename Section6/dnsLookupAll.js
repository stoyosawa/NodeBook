#!/usr/bin/env node
// 2020-02-08

const dns = require('dns');

let domain = process.argv[2] || 'nodejs.org';
dns.lookup(domain, {family: 0, all: true}, function(err, addresses) {
  if (err) {
    console.log(err.toString());
  }
  else {
    console.log(`${domain} - ${addresses.length} answers`);
    for(let entry of addresses) {
      console.log(`> IP${entry.family} ${entry.address}`);
    }
  }
});
