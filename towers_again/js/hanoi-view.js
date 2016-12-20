class View {
  constructor(game, el) {
    this.game = game;
    this.$el = el;
    this.setupTowers();
    this.render();

    //Install click handler on each pile
      //clickTower helper method

  }
  setupTowers() {
    for (var i = 0; i < 3; i++) {
      const $ul = $("<ul></ul>");
      this.$el.append($ul);
      for (var j = 0; j < 3; j++) {
        const $li =  $("<li></li>");
        $li.data("pos", j);
        $ul.append($li);
      }
    }
  }

  render() {
    const buildTower = (tower, towerNumber) => {
      let viewTower = $("ul")[towerNumber];
      let $viewTower = $(viewTower);
      let $spots = $viewTower.children();
      $spots.removeClass();
      tower.forEach((element, index) => {
        switch (element) {
          case 1:
            $spots.eq(3 - index - 1).addClass('disk1');
            break;
          case 2:
            $spots.eq(3 - index - 1).addClass('disk2');
            break;
          case 3:
            $spots.eq(3 - index - 1).addClass('disk3');
            break;
        }
      });
    };

    for (var i = 0; i < 3; i++) {
      buildTower(this.game.towers[i], i);
    }
  }
}

module.exports = View;
