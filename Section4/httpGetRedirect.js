#!/usr/bin/end node
// 2019-06-03

const protos = {
  'http:': require('http'),
  'https:': require('https')
}

function get(url) {
  console.log(`Accessing ${url}.`);
  
  // プロトコルの確認
  let proto = new URL(url).protocol;
  if (protos[proto] === undefined)
    throw new Error(`Protocol ${proto} not implemented`);
 
  // GET リクエスト
  let client = protos[proto].get(url, function(res) {
    // 30x なら再帰的に呼び出す
    let statusClass = Math.floor(res.statusCode / 100);
    if (statusClass == 3) {
      let location = res.headers.location;
      if (! location)
	throw new Error(`Location to redirect not provided`);
      console.log(`${url} to ${location}`);
      get(location);
      return;
    }

    // そうでなければデータを読む
    let size = 0;
    res.on('data', function(chunk) {
      size += chunk.length;
    });
    res.on('end', function() {
      console.log(`Got ${url}. ${size} bytes received`);
    });
  });

  client.on('error', function(err) {
    throw err;
  });
}

get(process.argv[2]);
