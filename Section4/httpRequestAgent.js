#!/usr/bin/env node
// 2019-12-29

const http = require('http');
let base = 'http://www.cutt.co.jp/';
let pages = ['/index.html', '/book/index.html',
	     '/lectures/index.html', '/direct/index.html'];

let agent = new http.Agent({
  keepAlive: true,
  maxSockets: 4
});

let options = {
  agent: agent
};

for(let page of pages) {
  options.path = page;
  let client = http.request(base, options, function(res) {
    let count = 0;
    let conn = res.headers.connection;
    let srcPort = client.socket.localPort;
    res.on('data', function(chunk) {
      count += chunk.length;
    });
    res.on('end', function() {
      console.log(`${page} ${srcPort} ${conn} ${count}.`);
    });
  });

  client.on('error', function(err) {
    console.log(err.toString());
  });
  client.end();
}

