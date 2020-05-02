#!/usr/bin/env node
// 2019-01-25

const iconv = require('iconv-lite');
const fs = require('fs');

function print(message, data) {
  console.log(`${message}: ${data}`);
  console.log(Buffer.from(data));
}

fs.readFile('doc.sjis', function(err, data) {
  if (err) {
    console.log(`Err: ${err.toString()}`);
    return;
  }

  print('Original', data);
  let  decoded = iconv.decode(data, 'sjis');
  print('Decoded', decoded);
  let encoded = iconv.encode(decoded, 'sjis');
  print('Re-encoded', encoded);
});
