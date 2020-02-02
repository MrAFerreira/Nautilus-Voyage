class Controller {
  constructor(game) {
    this.game = game;
    this.player = this.game.player;
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
          break;
        case 'd':
          if (this.player.speedX < 2) {
            this.player.speedX += 0.5;
          }
          break;
      }
    });
  }
}
