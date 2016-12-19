class View {
  constructor(game, $el) {
    this.game = game,
    this.$el = $el;
    this.setupBoard();
  }

  bindEvents() {}

  makeMove($square) {}

  setupBoard() {
    //Make ul
    const $ul = $("<ul></ul>");
    this.$el.append($ul);
    for (var i = 0; i < 9; i++) {
      const $li =  $("<li></li>");
      // $li.attr("style", "background-color: gray");
      $ul.append($li);
    }
  }
}



module.exports = View;
