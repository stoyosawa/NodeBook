<<<<<<< HEAD
#!/usr/bin/env node
// 2020-05-16

const fs = require('fs');

let promise = new Promise(function(resolve, reject) {
  fs.writeFile('default.txt', 'hello world', function(err) {
    if (err) {
      reject(err);
      return;
    }
    resolve('Written to the file');
  });
});

promise
  .then(function(data) {
    console.log(`Success: ${data}`);
  })
  .catch(function(err) {
    console.log(`Failed: ${err.toString()}`);
  })
  .finally(function() {
    console.log('Finally');
  });
=======
#!/usr/bin/env node
// 2020-05-16

const fs = require('fs');

let promise = new Promise(function(resolve, reject) {
  fs.writeFile('default.txt', 'hello world', function(err) {
    if (err) {
      reject(err);
      return;
    }
    resolve('Written to the file');
  });
});

promise
  .then(function(data) {
    console.log(`Success: ${data}`);
  })
  .catch(function(err) {
    console.log(`Failed: ${err.toString()}`);
  })
  .finally(function() {
    console.log('Finally');
  });
>>>>>>> 1a514557b46c4ddda9ee781c87c6b6845aac47ad
