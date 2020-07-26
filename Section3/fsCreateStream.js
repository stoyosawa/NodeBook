<<<<<<< HEAD
#!/usr/bin/env node
// 2019-12-18
// 2020-05-16: タイポ修正

const fs = require('fs');
let fileRead = process.argv[2];
let fileWrite = 'tmp.txt';

let reader = fs.createReadStream(fileRead, {encoding: 'utf8'});
let writer = fs.createWriteStream(fileWrite);

reader.on('data', function(chunk) {
  console.log(`reader read ${chunk.length} bytes.`);
  writer.write(chunk.toUpperCase());
});
reader.on('end', function() {
  console.log('reader done');
  writer.end();
});
writer.on('finish', function() {
  console.log('writer done');
});
=======
#!/usr/bin/env node
// 2019-12-18
// 2020-05-16: タイポ修正

const fs = require('fs');
let fileRead = process.argv[2];
let fileWrite = 'tmp.txt';

let reader = fs.createReadStream(fileRead, {encoding: 'utf8'});
let writer = fs.createWriteStream(fileWrite);

reader.on('data', function(chunk) {
  console.log(`reader read ${chunk.length} bytes.`);
  writer.write(chunk.toUpperCase());
});
reader.on('end', function() {
  console.log('reader done');
  writer.end();
});
writer.on('finish', function() {
  console.log('writer done');
});
>>>>>>> 1a514557b46c4ddda9ee781c87c6b6845aac47ad
