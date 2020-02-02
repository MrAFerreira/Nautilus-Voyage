class Game {
  constructor($canvas) {
    this.$canvas = $canvas;
    this.context = this.$canvas.getContext('2d');
    this.player = new Player(this);
    //this.loop();
  }

  clearScreen() {
    const context = this.context;
    context.clearRect(0, 0, this.$canvas.width, this.$canvas.height);
  }

  paint() {
    this.clearScreen();
    this.player.newPos();
    this.player.paint();
  }

  /*loop() {
    this.paint();
    this.context.clearRect(0, 0, $canvas.width, $canvas.height);
    this.player.checkBoundaries();
    window.requestAnimationFrame(loop);
  } */

  /*loop(timestamp) {
    //this.context.clearRect(0, 0, $canvas.width, $canvas.height);
    //background.paint();
    this.paint();
    //this.player.checkBoundaries();
    window.requestAnimationFrame(this.loop);
  }*/
}

/*const loop = timestamp => {
  game.context.clearRect(0, 0, $canvas.width, $canvas.height);
  game.paint();
  game.player.checkBoundaries();
  window.requestAnimationFrame(loop);
};

loop();*/
