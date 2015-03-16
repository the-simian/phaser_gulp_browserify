'use strict';


var path = require('path');

var loaders = path.join(__dirname, '/gulp/build/loaders/'),
  phaserModule = path.join(__dirname, '/node_modules/phaser/');

var phaserWebpackLoader = path.join(loaders, 'phaser.js'),
  phaserWebpackDebugLoader = path.join(loaders, 'phaser-debug.js'),
  debugLoader = path.join(loaders, 'debug-file.js');

var phaser = path.join(phaserModule, '/dist/phaser-arcade-physics.js'),
  p2 = path.join(phaserModule, '/dist/p2.js'),
  phaserDebug = path.join(__dirname, '/node_modules/phaser-debug/dist/phaser-debug.js');


console.log('phaserWebpackLoader', phaserWebpackLoader);

module.exports = {
  context: __dirname,
  entry: './src/game.js',
  output: {
    path: path.join(__dirname, 'js'),
    publicPath: 'assets/', // relative path for github pages
    filename: 'game.js', // no hash in main.js because index.html is a static page
    chunkFilename: '[hash]/js/[id].js',
    hotUpdateMainFilename: '[hash]/update.json',
    hotUpdateChunkFilename: '[hash]/js/[id].update.js'
  },
  module: {
    loaders: [
      {
        test: /phaser-arcade-physics\.js$/i,
        loader: 'phaser-webpack-loader'
      },
      {
        test: /phaser-debug\.js$/i,
        loader: 'phaser-debug-webpack-loader'
      }

//      , {
//        test: /\.js$/i,
//        loader: 'debug-loader'
//      }
    ]
  },
  resolveLoader: {
    alias: {
      'phaser-webpack-loader': phaserWebpackLoader,
      'phaser-debug-webpack-loader': phaserWebpackDebugLoader,
      'debug-loader': debugLoader
    }
  },
  resolve: {
    alias: {
      'phaser': phaser,
      'phaser-debug': phaserDebug,
      'p2': p2
    }
  }
};