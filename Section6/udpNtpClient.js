#!/usr/bin/env node
// 2019-11-02

// 時刻変換
// 64ビットのうち、先頭32ビットが秒、あとの32ビットが小数点以下
// スタートは1970年1月1日00:00:00
function getUTCfromBytes(buf, pos) {
  let sec = buf.readUInt32BE(pos);
  let frac = buf.readUInt32BE(pos+4);
  let time = (sec + frac / 2**32) * (10 ** 3);
  let utc;
  if (time === 0)
    utc = '0';
  else {
    let date = new Date(time);       // NTP の日時. 1900年からカウント
    let year = date.getFullYear() - 70;     // 70年引く
    date.setFullYear(year);
    utc = date.toISOString();
  }
  return utc;
}

function decodeNTP(buf) { // 48 bytes
  return {
    'leap (LI)': (buf[0] & 0xc0) >> 6,
    'version (VN)': (buf[0] & 0x38) >> 3,
    'mode': (buf[0] & 0x07),
    'stratum': buf[1],
    'reference time': getUTCfromBytes(buf, 16),
    'origin time': getUTCfromBytes(buf, 24),
    'receive time': getUTCfromBytes(buf, 32),
    'transmit time': getUTCfromBytes(buf, 40)
  };
};

const dgram = require('dgram');
let client = dgram.createSocket('udp4');
client.connect(123, 'pool.ntp.org');

let message = Buffer.alloc(48);   // 48 bytes
message[0] = 0x1b;                // Version 3, Mode 3

client.on('close', function() {
  console.log('Closed');
});
client.on('connect', function() {
  console.log('Connected');
  console.log('Sending: ', message);
  client.send(message);
});
client.on('error', function(err) {
  console.log(`Error: ${err.toString()}`);
  client.close();
});
client.on('listening', function() {
  console.log('Listening. Socket ready.');
});
client.on('message', function(msg, rinfo) {
  console.log('Message: from ', rinfo);
  console.log(msg);
  console.table(decodeNTP(msg));
  client.close();
});

