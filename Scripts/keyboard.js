class Controller {
  constructor(game) {
    this.game = game;
    this.player = this.game.player;
    this.$buttonReset = document.getElementById('btn-reset');
    this.$buttonPause = document.getElementById('btn-pause');
    this.$titleButton = document.getElementById('title-button');
    this.$titleScreen = document.getElementById('title-screen');
    this.$gameOverScreen = document.getElementById('game-over-screen');
    this.$tryAgainButton = document.getElementById('try-again-button');
  }

  setControlBindings() {
    this.$titleButton.addEventListener('click', () => {
      this.$titleScreen.classList.toggle('fade-out');
      this.$gameOverScreen.classList.toggle('fade-out');
      this.game.gameIsRunning = true;
      this.game.start();
    });

    this.$tryAgainButton.addEventListener('click', () => {
      this.$gameOverScreen.classList.remove('fade-in');
      this.$gameOverScreen.classList.toggle('fade-out');
      this.game.reset();
    });

    /* this.$buttonStart.addEventListener('click', () => {
      if (!this.game.gameIsRunning) {
        this.game.gameIsRunning = true;
        this.game.start();
      }
      console.log('Start clicked');
    }); */

    this.$buttonReset.addEventListener('click', () => {
      this.game.reset();
      this.game.gameIsRunning = !this.game.gameIsRunning;
    });

    this.$buttonPause.addEventListener('click', () => {
      this.game.pause();
    });
  }

  keyboardEventListeners() {
    window.addEventListener('keydown', event => {
      switch (event.key) {
        case 'w':
          if (this.player.speedY > -2) {
            this.player.speedY += -0.5;
          }

          break;
        case 's':
          if (this.player.speedY < 2) {
            this.player.speedY += 0.5;
          }
          break;
        case 'a':
          if (this.player.speedX > -2) {
            this.player.speedX += -0.5;
          }
          this.player.direction = 'west';
          break;
        case 'd':
          if (this.player.speedX < 2) {
            this.player.speedX += 0.5;
          }
          this.player.direction = 'east';
          break;
      }
    });
  }
}
