#!/usr/bin/env node
// 2019-11-09

const util = require('util');

let replServer = require('repl').start();

replServer.context.phy = {
  C: 299792458,
  G: 6.67430e-11,
  H: 6.62607015e-34,
  massEnergy: function(mass) {
    return mass * this.C * this.C;
  },
  gravitation: function(mass1, mass2, r) {
    return this.G * mass1 * mass2 / (r * r);
  },
  photonEnergy: function(frequency) {
    return this.H * frequency;
  }
};

replServer.displayPrompt();
