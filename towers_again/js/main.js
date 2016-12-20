let HanoiGame = require('./game.js');
let HanoiView = require('./hanoi-view.js');

$( () => {
  console.log("IT'S WORKINGGG!!!");
  const rootEl = $('.hanoi');
  const game = new HanoiGame();
  new HanoiView(game, rootEl);
});
