var Phaser = require('phaser');
var game;


game = new Phaser.Game(600, 600, Phaser.AUTO, 'phaser_game');


function createBootState() {
  var headerText = 'The  Oklahoma City  Javascript  Usergroup';

  var headerTextStyle = {
    font: '26pt Helvetica',
    fill: '#e0e4f0',
    align: 'center'
  };
  
  var headText = game.add.text(game.world.centerX, 32, headerText, headerTextStyle);

}

var bootState = {
  create: createBootState
};

game.state.add('boot', bootState);

game.start('boot');