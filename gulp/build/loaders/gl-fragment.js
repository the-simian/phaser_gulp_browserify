'use strict';

var _ = require('lodash');

/** gl-loader */
function toCleanStrings(line) {
  return _.trim(line);
}

function emptyStuff(line) {
  if (line) {
    return line;
  }
}

function toStrings(line) {
  return '"' + line + '"';
}

module.exports = function(source) {
  this.cacheable && this.cacheable();

  var sourceArray = source.split('\n');

  var cleanData = _(sourceArray)
    .map(toCleanStrings)
    .filter(emptyStuff)
    .map(toStrings)
    .value()

  var exportVal = 'module.exports=[' + cleanData + '];'
  
  return exportVal;
};