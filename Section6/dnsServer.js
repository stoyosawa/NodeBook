#!/usr/bin/env node
// 2020-02-08

const dns = require('dns');

function resolve(domain) {
  let servers = dns.getServers().join(', ');
  dns.resolve4(domain, function(err, address, family) {
    if (err)
      console.log(`${err.toString()}`);
    else {
      console.log(`${address} (${servers})`);
    }
  });
}

let domain = 'www.google.com';
resolve(domain);
// Google Public DNS servers
dns.setServers(['8.8.4.4', '8.8.8.8']);
resolve(domain);


	       


