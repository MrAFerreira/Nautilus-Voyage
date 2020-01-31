class Player {
  constructor(game) {
    this.game = game;
    this.width = 50;
    this.height = 35;
    this.positionX = 100;
    this.positionY = 100;
    this.speedX = 0;
    this.speedY = 0;
    this.gravity = 1;
    this.gravitySpeed = 0.001;
    this.keyboardEventListeners();
  }

  newPos() {
    let newPositionY = this.positionY + this.speedY;
    let newPositionX = this.positionX + this.speedX;

    /* if (newPositionY > $canvas.height - this.height - 1) {
      if (speedY >= 0) {
        speedY = Math.abs(this.speedY) * -1 * 1;
      }
    }
    if (newPositionX < this.width || newPositionX > $canvas.width - this.width) {
      this.speedX *= -1;
    }*/
    this.speedY += this.gravitySpeed;
    this.positionY += this.speedY;
    this.positionX += this.speedX;
  }

  checkBoundaries() {
    if (this.positionY <= 50) {
      this.positionY = 50;
      this.speedY = 0;
    }

    if (this.positionY >= 600) {
      this.positionY = 600;
    }

    if (this.positionX <= 30) {
      this.positionX = 30;
    }
    if (this.positionX >= 670 - this.width) {
      this.positionX = 670 - this.width;
    }
  }

  paint() {
    context.fillRect(this.positionX, this.positionY, this.width, this.height);
  }

  keyboardEventListeners() {
    window.addEventListener('keydown', event => {
      switch (event.key) {
        case 'w':
          if (this.speedY > -2) {
            this.speedY += -0.5;
          }
          break;
        case 's':
          if (this.speedY < 2) {
            this.speedY += 0.5;
          }
          break;
        case 'a':
          if (this.speedX > -2) {
            this.speedX += -0.5;
          }
          break;
        case 'd':
          if (this.speedX < 2) {
            this.speedX += 0.5;
          }
          break;
      }
    });
  }
}

const player = new Player();
