class Scoreboard {
  constructor(game) {
    this.game = game;
    this.$scoreSpan = document.querySelector('#maximum-depth');
    this.$oxygenCapacity = document.querySelector('#oxygen-level');
    this.$currentDepth = document.querySelector('#current-depth');
    this.maximumDepth = 0;
  }

  checkScore() {
    if (this.maximumDepth > this.game.depth) {
      this.maximumDepth = this.game.depth;
    }
  }

  paint() {
    this.$currentDepth.innerText = this.game.depth;
    this.$scoreSpan.innerText = this.maximumDepth;
    this.$oxygenCapacity.innerText = parseInt(this.game.player.oxygen);
  }
}
