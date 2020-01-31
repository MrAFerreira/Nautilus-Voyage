class Player {
  constructor(game) {
    this.game = game;
    this.width = 50;
    this.height = 20;
    this.positionX = 100;
    this.positionY = 100;
    this.speedX = 0;
    this.speedY = 1;
    this.gravity = 1;
    this.gravitySpeed = 0.3;
  }

  paint() {
    this.game.context.beginPath();
    this.game.context.fillRect(0, 0, 100, 100);
    this.game.context.fillStyle = 'red';
  }

  newPos() {
    let newPositionY = this.positionY + this.speedY;
    let newPositionX = this.positionX + this.speedX;
  }
}
