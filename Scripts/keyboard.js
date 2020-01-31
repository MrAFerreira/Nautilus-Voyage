class Controller {
  constructor(game) {
    this.game = game;
  }

  keyPress() {
    window.addEventListener('keydown', event => {
      if (event.code === 'Space') {
        this.player.speedY *= -1;
      }
    });
  }
}
