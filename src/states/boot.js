var game = require('../game');


function createBootState() {
  var headerText = 'booting Up';

  var headerTextStyle = {
    font: '26pt Helvetica',
    fill: '#e0e4f0',
    align: 'center'
  };

  var headText = game.add.text(game.world.centerX, 32, headerText, headerTextStyle);

}

var boot = {
  create: createBootState
};


module.exports = boot;