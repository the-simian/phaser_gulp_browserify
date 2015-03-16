'use strict';

/** phaser-debug-webpack-loader */
module.exports = function(source) {
  this.cacheable && this.cacheable();

  // Inject Phaser object via webpack's `require` from the outside of the `phaser-debug` module function which has got its own `require`.
  source = source.replace(/(var\s+ui\s*=\s*require\('\.\/util\/ui'\))/, 'var Phaser = _Phaser; $1');
  source = '(function () { var _Phaser = require("phaser").Phaser;\n\n' + source + '\n\n}());';

  return source;
};