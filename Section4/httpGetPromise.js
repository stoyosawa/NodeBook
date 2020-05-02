#!/usr/bin/env node
// 2019-12-29

const http = require('http');

let urls = [
  'http://bandboston.com/',
  'http://www.aerosmith.com/',
  'http://www.brucespringsteen.net/',
  'http://www.jamesbrown.com/',
  'http://www.johnlennon.com/',
  'http://www.marvingaye.com/',
  'http://www.pinkfloyd.com/',
  'http://www.rollingstones.com/',
  'http://www.steviewonder.net/',
  'http://www.temptationsofficial.com/'
];

let promises = [];
for(let url of urls) {
  promises.push(new Promise(function(resolve, reject) {
    let start = Date.now();
    http.get(url, function(res) {
      let size = 0;
      res.on('data', function(chunk) {
	size += chunk.length;
      });
      res.on('end', function() {
	resolve({
	  size: size,
	  time: Date.now() - start
	});
      });
    }).on('error', function(err) {
      reject(err);
    });
  }));
}

Promise.all(promises)
  .then(function(ret) {
    let n = ret.length;
    console.log(`N=${n}`);
    for(let type of ['size', 'time']) {
      let list = ret.map(function(elem) {
	return elem[type];
      });
      let max = Math.max(...list);
      let min = Math.min(...list);
      let sum = list.reduce(function(accum, curr) {
	return accum + curr;
      }, 0);
      let sum2 = list.reduce(function(accum, curr) {
	return accum + curr * curr;
      }, 0);
      let ave = sum / n;
      let std = Math.sqrt((n * sum2 - sum * sum) / (n * (n - 1)));
      console.log(`${type}: Max ${max}, Min ${min}, 
  Average ${ave}, Stdev ${std}`);
    }
  })
  .catch(function(err) {
    console.log(err.toString());
  });
      
