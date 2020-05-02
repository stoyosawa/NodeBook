#!/usr/bin/env node
// 2019-11-29

// Python の argparse を移植したもの
const argparse = require('argparse');

let parser = new argparse.ArgumentParser({
  description: 'argparse module test'
});

// IPアドレスは文字列型
parser.addArgument(
  ['-l', '--listen'],
  {
    help: "Server's listening address",
    defaultValue: '127.0.0.1',
    type: 'string',
  }
);

// ポート番号は数値型
parser.addArgument(
  ['-p', '--port'],
  {
    help: "Server's listening port",
    defaultValue: 8080,
    type: 'int'
  }
);

// debug on/offはBoolean
parser.addArgument(
  ['-d', '--debug'],
  {
    'help': 'Debug mode (noisier)',
    'action': 'storeTrue'
  }
);
  
let args = parser.parseArgs();
for(let key in args) {
  if (args.hasOwnProperty(key))
      console.log(`${key} > ${args[key]}`);
}
