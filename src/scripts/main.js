// Require Node modules in the browser thanks to Browserify: http://browserify.org
var bespoke = require('bespoke'),
  classes = require('bespoke-classes'),
  keys = require('bespoke-keys'),
  touch = require('bespoke-touch'),
  hash = require('bespoke-hash'),
  progress = require('bespoke-progress');

// Bespoke.js
bespoke.from('article', [
  classes(),
  keys(),
  touch(),
  hash(),
  progress()
]);
