class Game {
  constructor($canvas) {
    this.$canvas = $canvas;
    this.context = this.$canvas.getContext('2d');
    this.player = new Player(this);
    this.controller = new Controller(this);
    this.controller.keyboardEventListeners();
    this.depth = 0;
  }

  background() {
    this.context.save();
    //let depthCounter = 0;
    let gradient = this.context.createLinearGradient(
      this.$canvas.width / 2,
      this.depth,
      this.$canvas.width / 2,
      5000 - Math.abs(this.depth)
    );
    gradient.addColorStop(0, 'cyan');
    gradient.addColorStop(0.25, 'dodgerblue');
    gradient.addColorStop(0.5, 'mediumblue');
    gradient.addColorStop(0.75, 'midnightblue');
    gradient.addColorStop(1, 'black');
    this.context.fillStyle = gradient;
    if (this.player.positionY >= 550) {
      this.depth--;
      console.log(this.depth);
    } else if (this.player.positionY <= 100 && this.depth <= 0) {
      this.depth += 1;
      console.log(this.depth);
    }
    this.context.fillRect(0, 0, this.$canvas.width, this.$canvas.height);
    this.context.restore();
  }

  clearScreen() {
    const context = this.context;
    context.clearRect(0, 0, this.$canvas.width, this.$canvas.height);
  }

  paint() {
    this.clearScreen();
    this.background();
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
