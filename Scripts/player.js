class Player {
  constructor(game) {
    this.game = game;
    this.width = 50;
    this.height = 35;
    this.positionX = 350;
    this.positionY = 200;
    this.speedX = 0;
    this.speedY = 0;
    this.gravity = 1;
    this.gravitySpeed = 0.001;
    this.oxygen = 100;
    //this.keyboardEventListeners();
  }

  newPos() {
    let newPositionY = this.positionY + this.speedY;
    let newPositionX = this.positionX + this.speedX;
    this.speedY += this.gravitySpeed;
    this.positionY += this.speedY;
    this.positionX += this.speedX;
  }

  checkBoundaries() {
    if (this.positionY <= 50) {
      this.positionY = 50;
      this.speedY = 0;
    }

    if (this.positionY > 600) {
      this.positionY = 599;
    }

    if (this.positionX <= 30) {
      this.positionX = 30;
    }
    if (this.positionX >= 670 - this.width) {
      this.positionX = 670 - this.width;
    }
  }

  paint() {
    this.game.context.fillRect(this.positionX, this.positionY, this.width, this.height);
  }

  oxygenLevels() {
    if (this.game.depth > -1000) {
      this.oxygen -= 0.005;
    } else if (this.game.depth > -3000) {
      this.oxygen -= 0.01;
    }
  }
}
