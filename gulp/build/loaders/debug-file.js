'use strict';

/** phaser-webpack-loader */
module.exports = function(source) {
  this.cacheable && this.cacheable();

  console.log('I AM A LOADER');
  
  return source;
};