#!/usr/bin/env node
// 2019-11-24

let replServer = require('repl').start();

replServer.defineCommand('lsHist', {
  help: 'Show history',
  action: function() {
    this.history.slice(0, 10).forEach(function(elem, idx) {
      console.log(`${idx+1}: ${elem}`);
    });
    this.displayPrompt();
  }
});

replServer.defineCommand('execHist', {
  help: 'Run the history by number',
  action: function(n) {
    this.clearBufferedCommand();
    let idx = Number(n);
    let cmd = this.history[idx];
    let result = eval(cmd);
    console.log(`[${idx}] ${cmd} => ${result}`);
    this.displayPrompt();
  }
});
