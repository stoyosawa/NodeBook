<<<<<<< HEAD
#!/usr/local/node-v12.13.1/bin/node
// 2020-04-17
// 2020-05-16: タイポ修正

function logger(msg) {
  let d = Date.now().valueOf();
  console.log(`${d} child: ${msg}`);
}

logger(`PID: ${process.pid}`);
logger(`PPID: ${process.ppid}`);

process.on('message', function(message) {
  logger(`From parent: ${message}`);
});
process.on('disconnect', function() {
  logger('Disconnected from parent. Exiting');
  process.exit(100);
});
process.on('exit', function(code) {
  logger(`I am done: ${code}`);
});

let requests = ['hello', 'bonjour', 'hola', 'ciao', 'bye'];
let i = 0;
let interval = setInterval(function() {
  process.send(requests[i++ % requests.length]);
}, 1000);

=======
#!/usr/local/node-v12.13.1/bin/node
// 2020-04-17
// 2020-05-16: タイポ修正

function logger(msg) {
  let d = Date.now().valueOf();
  console.log(`${d} child: ${msg}`);
}

logger(`PID: ${process.pid}`);
logger(`PPID: ${process.ppid}`);

process.on('message', function(message) {
  logger(`From parent: ${message}`);
});
process.on('disconnect', function() {
  logger('Disconnected from parent. Exiting');
  process.exit(100);
});
process.on('exit', function(code) {
  logger(`I am done: ${code}`);
});

let requests = ['hello', 'bonjour', 'hola', 'ciao', 'bye'];
let i = 0;
let interval = setInterval(function() {
  process.send(requests[i++ % requests.length]);
}, 1000);

>>>>>>> 1a514557b46c4ddda9ee781c87c6b6845aac47ad
