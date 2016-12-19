const View = require('./ttt-view.js');
const Game = require('../../solution/game.js');

const game = new Game();

$( () => {
  let board = $('.ttt');
  console.log(board);
  const view = new View(game, board);
});

$("li").on("mouseover", event => {
  let target = $(event.currentTarget);
  target.attr("style", "background-color: yellow");
});
