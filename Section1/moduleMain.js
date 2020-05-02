#!/usr/bin/env node

console.log('Call me, any, anytime.');

module.exports.callMe = function callMe() {
  console.log('Call me any day or night.');
}

if (require.main === module) {   // 直接実行ならtrue
  console.log(`${module.filename}: This is main.`);
  console.log(require.main);
  this.callMe();
}
