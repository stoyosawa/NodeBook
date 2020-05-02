#!/usr/bin/env node
// 2019-08-31

const http = require('http');
const fs = require('fs');

// サポートしているメソッドと処理関数
let supportedMethods = {
  GET: procGet,
  PUT: procPut,
  DELETE: procDelete
}


// REST Server クラス
class RESTServer {
  constructor(port, address) {
    this.port = port;
    this.address  = address;

    // サーバ起動
    this.server = http.createServer(proc);
    this.server.listen(port, address);

    return this;
  }
}

// RESTResponse -- message 作成
//
class RESTResponse {
  constructor(code, result) {
    this.code = code || 200;
    this.header= {
      'Content-Type': 'application/json',
      Connection: 'close'
    };
    this.body = {
      code: code || 200,
      reasonPhrase: http.STATUS_CODES[code],
      result: result || 'Action done.'
    };
  }

  send(res) {
    res.writeHead(this.code, this.header);
    res.write(JSON.stringify(this.body));
    res.end();
  }
}


// request 処理関数
function proc(req, res) {
  let remote = req.socket.remoteAddress + ':' +
      req.socket.remotePort;
  let method = req.method;
  let path = req.url.substring(1);      // 相対パス
  console.log(`From ${remote}: ${method} ${path}`);

  if (Object.keys(supportedMethods).includes(method) === false) {
    new RESTResponse(405, `${method} not implemented.`).send(res);
    return;
  }

  let chunks = [];
  req.setEncoding('utf8');
  req.on('data', function(chunk) {
    chunks.push(chunk);
  });
  req.on('end', function() {
    let data = chunks.join('');
    supportedMethods[method](path, data).send(res);
  });
}


// GET要求処理
function procGet(path, data) {
  try {
    let content = fs.readFileSync(path, {'encoding':'utf8'});
    return new RESTResponse(200, content);
  }
  catch(err) {
    return new RESTResponse(404, `${path}: ${err.toString()}`);
  }
}

// PUT要求処理
function procPut(path, data) {
  try {
    fs.writeFileSync(path, data, {'encoding':'utf8'});
    return new RESTResponse(200, data);
  }
  catch(err) {
    return new RESTResponse(400, `${path}: ${err.toString()}`);
  }
}

// DELETE要求処理
function procDelete(path, data) {
  try {
    fs.unlinkSync(path);
    return new RESTResponse(200, 'Deleted');
  }
  catch(err) {
    return new RESTResponse(404, `${path}: ${err.toString()}`);
  }
}

/* ------ main ------- */
// C:\temp から起動
process.chdir('C:/temp');
let rest = new RESTServer(8080, '127.0.0.1');
console.log('Server started.');

