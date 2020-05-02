#!/usr/bin/env node
// 2020-02-08

const dns = require('dns');

let domains = [
  'www.att.com',              // US
  'www.chinamobileltd.com',   // CN
  'www.nttdocomo.co.jp',      // JP
  'www.orange.fr',            // FR
  'www.telekom.com',          // DE
  'www.telephonica.com',      // ES
  'www.verizon.com',          // US
  'www.vodafone.co.uk'        // UK
];

let resolves = [];
for(let d of domains) {
  resolves.push(dns.promises.resolveAny(d));
}

Promise.allSettled(resolves)
  .then(function(ret) {
    for(let i=0; i<ret.length; i++) {
      let status = ret[i].status;
      let value = ret[i].value || [ ret[i].reason ];
      console.log(`-- ${domains[i]}: ${status}`);
      for(let answer of value) {
	console.log(JSON.stringify(answer));
      }
    }
  });
