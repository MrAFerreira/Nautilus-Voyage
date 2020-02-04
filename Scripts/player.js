class Player {
  constructor(game) {
    this.game = game;
    this.width = 70;
    this.height = 35;
    this.positionX = 350;
    this.positionY = 200;
    this.speedX = 0;
    this.speedY = 0;
    this.gravity = 1;
    this.gravitySpeed = 0.001;
    this.oxygen = 100;
    this.direction = 'east';
  }

  reset() {
    this.positionX = 350;
    this.positionY = 200;
    this.speedX = 0;
    this.speedY = 0;
    this.oxygen = 100;
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
      this.positionY = 51;
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

  checkDeath() {
    if (this.oxygen <= 0) {
      this.game.gameIsRunning = false;
      this.game.scoreboard.updateScore();
      this.game.controller.$gameOverScreen.classList.remove('fade-out');
      this.game.controller.$gameOverScreen.classList.toggle('fade-in');
    }
  }

  checkCollisions() {
    for (let enemy of this.game.ene) {
      if (
        this.positionX + this.width > enemy.positionX &&
        this.positionX < enemy.positionX + enemy.width &&
        this.positionY + this.height > enemy.positionY &&
        this.positionY < enemy.positionY + enemy.height
      ) {
        this.oxygen -= 0.2;
      }
    }
  }

  oxygenLevels() {
    if (this.game.depth > -1000) {
      this.oxygen -= 0.005;
    } else if (this.game.depth > -3000) {
      this.oxygen -= 0.01;
    }
  }

  runLogic() {
    this.newPos();
    this.checkBoundaries();
    this.checkCollisions();
    this.checkDeath();
    this.oxygenLevels();
  }

  paint() {
    let playerImageUrl;
    if (this.game.player.direction === 'east') {
      playerImageUrl = './imgs/yellow_submarine_east.png';
    } else {
      playerImageUrl = './imgs/yellow_submarine.png';
    }

    let playerImage = new Image();
    playerImage.src = playerImageUrl;

    //playerImage.addEventListener('load', () => {
    this.game.context.drawImage(playerImage, this.positionX, this.positionY);

    //});
    //this.game.context.fillRect(this.positionX, this.positionY, this.width, this.height);
  }
}
