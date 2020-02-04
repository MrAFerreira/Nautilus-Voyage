class Scoreboard {
  constructor(game) {
    this.game = game;
    this.$scoreSpan = document.querySelector('#maximum-depth');
    this.$oxygenCapacity = document.querySelector('#oxygen-level');
    this.$currentDepth = document.querySelector('#current-depth');
    this.$gameOverScore = document.querySelector('#current-score span');
    this.$highscore = document.querySelector('#highscore span');
    this.maximumDepth = 0;
  }

  updateScore() {
    this.$gameOverScore.innerText = Math.abs(this.game.depth);
    this.$highscore.innerText = Math.abs(this.maximumDepth);
  }

  checkScore() {
    if (this.maximumDepth > this.game.depth) {
      this.maximumDepth = this.game.depth;
    }
  }

  paint() {
    this.$currentDepth.innerText = Math.abs(this.game.depth);
    this.$scoreSpan.innerText = Math.abs(this.maximumDepth);
    this.$oxygenCapacity.innerText = parseInt(this.game.player.oxygen);
  }
}
