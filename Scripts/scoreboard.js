class Scoreboard {
  constructor(game) {
    this.game = game;
    this.$scoreSpan = document.querySelector('#maximum-depth');
    this.$oxygenCapacity = document.querySelector('#oxygen-level');
    this.$currentDepth = document.querySelector('#current-depth');
    this.$gameOverScore = document.querySelector('#current-score span');
    this.$highscore = document.querySelector('#highscore span');
    this.$winScore = document.querySelector('#current-score-win span');
    this.maximumDepth = 0;
  }

  checkWin() {
    if (this.game.depth <= -7000) {
      this.game.gameIsRunning = false;
      this.updateScore();
      this.game.controller.$winScreen.classList.remove('fade-out');
      this.game.controller.$winScreen.classList.toggle('fade-in');
    }
  }

  updateScore() {
    this.$gameOverScore.innerText = Math.abs(this.game.depth);
    this.$winScore.innerText = Math.abs(this.game.depth);
    this.$highscore.innerText = Math.abs(this.maximumDepth);
  }

  checkScore() {
    if (this.maximumDepth > this.game.depth) {
      this.maximumDepth = this.game.depth;
    }
  }

  runLogic() {
    this.checkScore();
    this.checkWin();
  }

  paint() {
    this.$currentDepth.innerText = Math.abs(this.game.depth);
    this.$scoreSpan.innerText = Math.abs(this.maximumDepth);
    if (this.game.player.oxygen <= 50) {
      this.$oxygenCapacity.innerText = parseInt(this.game.player.oxygen);
      this.$oxygenCapacity.classList.remove('blue');
      this.$oxygenCapacity.classList.add('red');
    } else {
      this.$oxygenCapacity.innerText = parseInt(this.game.player.oxygen);
      this.$oxygenCapacity.classList.remove('red');
      this.$oxygenCapacity.classList.add('blue');
    }
  }
}
