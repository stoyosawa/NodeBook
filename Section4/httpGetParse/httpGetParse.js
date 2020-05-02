#!/usr/bin/env node
// 2020-01-04

const https = require('https');
const jsdom = require('jsdom');
const index = 'https://nodejs.org/dist/latest-v12.x/docs/api/';

function get(url) {
  return new Promise(function(resolve, reject) {
    let client = https.get(url, function(res) {
      let body = [];
      res.setEncoding('utf8');
      res.on('data', function(chunk) {
	body.push(chunk);
      });
      res.on('end', function() {
	resolve(body.join(''));
      });
    });
    client.on('error', function(err) {
      reject(err);
    });
  });
}

function htmlParse(html) {
  let dom = new jsdom.JSDOM(html);
  let anchors = dom.window.document.getElementsByTagName('a');
  let links = new Set();
  for(let a of anchors) {
    links.add(a.href);
  }
  return links;
}

get(index)
  .then(function(res) {
    let links = htmlParse(res);
    console.log(`Total: ${links.size} unique links.`);
    console.log([...links].sort().join('\n'));
  })
  .catch(function(err) {
    console.log(err.toString());
  });

 
