// Require Node modules in the browser thanks to Browserify: http://browserify.org
var bespoke = require('bespoke'),
  voltaire = require('bespoke-theme-voltaire'),
  classes = require('bespoke-classes'),
  keys = require('bespoke-keys'),
  touch = require('bespoke-touch'),
  hash = require('bespoke-hash'),
  progress = require('bespoke-progress');

// Bespoke.js
bespoke.from('article', [
  voltaire(),
  classes(),
  keys(),
  touch(),
  hash(),
  progress()
]);
