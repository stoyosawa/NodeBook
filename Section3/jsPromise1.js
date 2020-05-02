const fs = require('fs');

let promise = new Promise(function(resolve, reject) {
  fs.writeFile('default.txt', 'hello world', function(err) {
    if (err) {
      reject(err);
      return;
    }
    resolve('Writen to the file');
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
