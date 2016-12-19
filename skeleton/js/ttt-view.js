class View {
  constructor(game, $el) {
    this.game = game,
    this.$el = $el;
    this.setupBoard();
  }

  bindEvents() {
    $('li').on("click", event => {
      const $target = $(event.currentTarget);
      const location = [Math.floor($target.data("pos")/3), $target.data("pos")%3];
      const currentPlayer = this.game.currentPlayer;
      try {
        this.game.playMove(location);  //Backend Move
      } catch (e) {
        alert('Not a valid move');
      } finally {
        this.makeMove($target, currentPlayer);  //View move
      }
    });
  }

  makeMove($square, currentPlayer) {
    $square.addClass('displayed');
    let curr = this.game.currentPlayer;
    $square.text(currentPlayer);
    if (this.game.winner() ) {
      alert(`The winner is ${this.game.winner()}`);
    } else if (this.game.isOver()) {
      alert('Whoops, tie game!  Ya\'ll lose.');
    }
}

  setupBoard() {
    //Make ul
    const $ul = $("<ul></ul>");
    this.$el.append($ul);
    for (var i = 0; i < 9; i++) {
      const $li =  $("<li></li>");
      $li.data("pos", i);
      $ul.append($li);
    }
    this.bindEvents();
  }

}



module.exports = View;
