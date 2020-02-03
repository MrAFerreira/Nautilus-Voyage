class Scoreboard {
  constructor(game) {
    this.game = game;
    this.$scoreSpan = document.querySelector('aside h1 span');
    this.$oxygenCapacity = document.querySelector('#oxygen-level');
  }

  paint() {
    this.$scoreSpan.innerText = this.game.depth;
    this.$oxygenCapacity.innerText = parseInt(this.game.player.oxygen);
  }
}
