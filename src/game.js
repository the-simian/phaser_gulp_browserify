var Phaser = require('phaser');
var game;


game = new Phaser.Game(600, 600, Phaser.AUTO, 'phaser_game');


function createBootState() {


}

var bootState = {
  create: createBootState
};

game.state.add('boot', bootState);

game.start('boot');