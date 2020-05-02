#!/usr/bin/env node
// 2020-03-28

module.exports = {
  pi: Math.PI,
  sin: function(deg) { return Math.sin(this.pi * deg / 180); }
};
