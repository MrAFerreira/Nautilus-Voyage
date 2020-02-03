class Enemy {
  constructor(game, posX) {
    this.game = game;
    this.positionX = posX;
    this.positionXalt = 700;
    this.positionY = Math.random() * this.game.$canvas.height;
    this.height = 30;
    this.width = 30;
    this.speedY = 0;
    this.speedX = 2;
  }

  incomingLeft() {
    if (this.game.player.positionY >= 600) {
      this.speedY += this.game.player.speedY * this.game.player.gravitySpeed;
      this.positionY -= this.speedY;
    }

    this.positionX += this.speedX;
  }

  setPosX(posX) {
    this.positionX = posX;
  }

  incomingRight() {
    if (this.game.player.positionY >= 600) {
      this.speedY += this.game.player.speedY * this.game.player.gravitySpeed;
      this.positionY -= this.speedY;
    }
    this.positionX -= this.speedX;
  }

  paint() {
    this.game.context.save();
    this.game.context.beginPath();
    this.game.context.fillStyle = 'red';
    this.game.context.fillRect(this.positionX, this.positionY, this.width, this.height);
    this.game.context.closePath();
    this.game.context.restore();
  }
}
