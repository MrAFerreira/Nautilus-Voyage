class Powerup {
  constructor(game, positionY) {
    this.game = game;
    this.positionY = positionY;
    this.positionX = this.game.$canvas.width / 2;
    this.powerupArray = [];
  }
}

class OxygenTank extends Powerup {
  constructor(game, positionY) {
    super(game, positionY);
    this.game = game;
    this.positionY = positionY;
    this.positionX = this.game.$canvas.width / 2;
    this.width = 20;
    this.height = 30;
    this.tanksArray = [];
  }

  paint() {
    for (let tank of this.tanksArray) {
      let tankImageUrl = '/imgs/oxygen_tank.png';
      let tankImage = new Image();
      tankImage.src = tankImageUrl;
      this.game.context.drawImage(tankImage, tank.positionX, tank.positionY);
      /* this.game.context.save();
      this.game.context.beginPath();
      this.game.context.fillStyle = 'yellow';
      this.game.context.fillRect(tank.positionX, tank.positionY, tank.width, tank.height);
      this.game.context.closePath();
      this.game.context.restore(); */
    }
  }

  addOxygenTank() {
    if (Math.abs(this.game.depth) % 500 === 0 && this.game.depth < 0) {
      let newTank = new OxygenTank(game, Math.abs(this.game.depth) + 200);
      this.tanksArray.push(newTank);
    }
  }

  checkCollisionsAndMove() {
    for (let tank of this.tanksArray) {
      tank.positionY -= 1;
      if (
        tank.positionX + tank.width > this.game.player.positionX &&
        tank.positionX < this.game.player.positionX + this.game.player.width &&
        tank.positionY + tank.height > this.game.player.positionY &&
        tank.positionY < this.game.player.positionY + this.game.player.height
      ) {
        this.game.player.oxygen += 10;
        this.tanksArray.splice(this.tanksArray.indexOf(tank), 1);
      }
    }
  }

  runLogic() {
    this.addOxygenTank();
    this.checkCollisionsAndMove();
  }
}
