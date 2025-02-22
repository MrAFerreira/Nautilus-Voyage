class Controller {
  constructor(game) {
    this.game = game;
    this.player = this.game.player;
    this.$buttonReset = document.getElementById('btn-reset');
    this.$buttonPause = document.getElementById('btn-pause');
    this.$titleButton = document.getElementById('title-button');
    this.$titleScreen = document.getElementById('title-screen');
    this.$gameOverScreen = document.getElementById('game-over-screen');
    this.$winScreen = document.getElementById('win-screen');
    this.$infoScreen = document.getElementById('info-screen');
    this.$infoButton = document.getElementById('btn-info');
    this.$tryAgainButtonOver = document.querySelector('#game-over-screen .try-again-button');
    this.$tryAgainButtonWin = document.querySelector('#win-screen .try-again-button');
    this.$difficultyLevels = document.getElementById('difficulty-levels');
    this.$easyButton = document.getElementById('btn-easy');
    this.$normalButton = document.getElementById('btn-normal');
    this.$hardButton = document.getElementById('btn-hard');
  }

  changeScreens() {
    this.$titleScreen.classList.toggle('fade-out');
    this.$difficultyLevels.classList.remove('fade-in');
    this.$difficultyLevels.classList.toggle('fade-out');
    this.$gameOverScreen.classList.toggle('fade-out');
    this.$winScreen.classList.toggle('fade-out');
    this.$infoScreen.classList.toggle('fade-out');
    this.game.gameIsRunning = true;
    this.game.start();
  }

  setControlBindings() {
    this.$titleButton.addEventListener('click', () => {
      this.$titleButton.classList.toggle('fade-out');
      this.$difficultyLevels.classList.remove('fade-out');
      this.$difficultyLevels.classList.toggle('fade-in');
    });

    this.$easyButton.addEventListener('click', () => {
      this.game.difficulty = 8000;
      this.changeScreens();
    });

    this.$normalButton.addEventListener('click', () => {
      this.game.difficulty = 5000;
      this.changeScreens();
    });

    this.$hardButton.addEventListener('click', () => {
      this.game.difficulty = 3000;
      this.changeScreens();
    });

    this.$tryAgainButtonOver.addEventListener('click', () => {
      this.$gameOverScreen.classList.remove('fade-in');
      this.$gameOverScreen.classList.toggle('fade-out');
      this.game.reset();
    });

    this.$tryAgainButtonWin.addEventListener('click', () => {
      this.$winScreen.classList.remove('fade-in');
      this.$winScreen.classList.toggle('fade-out');
      this.game.reset();
    });

    this.$buttonReset.addEventListener('click', () => {
      this.game.reset();
      this.game.gameIsRunning = !this.game.gameIsRunning;
    });

    this.$buttonPause.addEventListener('click', () => {
      this.game.pause();
    });

    this.$infoButton.addEventListener('click', () => {
      if (this.game.gameIsRunning) {
        this.game.pause();
        this.$infoScreen.classList.remove('fade-out');
        this.$infoScreen.classList.toggle('fade-in');
      } else {
        this.game.pause();
        this.$infoScreen.classList.remove('fade-in');
        this.$infoScreen.classList.toggle('fade-out');
      }
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
