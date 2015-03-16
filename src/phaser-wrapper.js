// This exports Phaser to window.
require('phaser-unfixed');

// And then we return it here.
global.PIXI = require('pixi');
module.exports = Phaser;