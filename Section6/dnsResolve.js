#!/usr/bin/env node
// 2019-08-17

const dns = require('dns');
let domain = process.argv[2] || 'mit.edu';

let rrtype = ['A', 'AAAA', 'CNAME', 'MX'];
for(let r of rrtype) {
  dns.resolve(domain, r, function(err, recs) {
    if(err) {
      console.log(`${r}: ${err.toString()}`);
    }
    else {
      console.log(`${r}: #${recs.length}. Type ${typeof recs[0]}`);
      for(let r of recs) {
	console.log(`${JSON.stringify(r)}`);
      }
    }
  });
}
      

