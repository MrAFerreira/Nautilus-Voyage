class Game {
  constructor($canvas) {
    this.$canvas = $canvas;
    this.context = $canvas.context;
    this.player = new Player(this);
  }

  clearScreen() {
    const context = this.context;
    context.clearRect(0, 0, this.$canvas.width, this.$canvas.height);
  }

  paint() {
    this.clearScreen();
    this.player.paint();
  }
  loop() {
    this.paint();

    window.requestAnimationFrame(loop);
  }
}
