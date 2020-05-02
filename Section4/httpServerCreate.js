#!/usr/bin/env node
// 2020-01-06

const http = require('http');
let server = http.createServer();
server.listen(8080, '127.0.0.1');
