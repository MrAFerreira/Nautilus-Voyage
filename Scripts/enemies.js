class Enemy {
  constructor(game, posX) {
    this.game = game;
    this.positionX = posX;
    this.positionY = Math.random() * this.game.$canvas.height;
    this.height = 15;
    this.width = 30;
    this.speedY = 0;
    this.speedX = 2;
    this.direction;
  }

  incomingLeft() {
    if (this.game.player.positionY >= 599) {
      this.speedY += this.game.player.speedY * this.game.player.gravitySpeed;
      this.positionY -= this.speedY;
    }
    this.direction = 'west';
    this.positionX += this.speedX;
  }

  setPosX(posX) {
    this.positionX = posX;
  }

  incomingRight() {
    if (this.game.player.positionY >= 599) {
      this.speedY += this.game.player.speedY * this.game.player.gravitySpeed;
      this.positionY -= this.speedY;
    }
    this.direction = 'east';
    this.positionX -= this.speedX;
  }

  paint() {
    let fishImageUrl;
    if (this.direction === 'east') {
      fishImageUrl = 'imgs/clown_fish_west.png';
    } else {
      fishImageUrl = 'imgs/clown_fish_east.png';
    }
    let fishImage = new Image();
    fishImage.src = fishImageUrl;
    this.game.context.drawImage(fishImage, this.positionX, this.positionY);
    /* this.game.context.save();
    this.game.context.beginPath();
    this.game.context.fillStyle = 'red';
    this.game.context.fillRect(this.positionX, this.positionY, this.width, this.height);
    this.game.context.closePath();
    this.game.context.restore(); */
  }
}

class Turtle extends Enemy {
  constructor(game, posX) {
    super(game, posX);
    this.game = game;
    this.positionX = posX;
    this.positionY = Math.random() * this.game.$canvas.height;
    this.height = 30;
    this.width = 60;
    this.speedY = 0;
    this.speedX = 1;
  }

  paint() {
    let turtleImageUrl;
    if (this.direction === 'east') {
      turtleImageUrl = 'imgs/turtle_east.png';
    } else {
      turtleImageUrl = 'imgs/turtle_west.png';
    }
    let turtleImage = new Image();
    turtleImage.src = turtleImageUrl;
    this.game.context.drawImage(turtleImage, this.positionX, this.positionY);
  }
}

class Shark extends Enemy {
  constructor(game, posX) {
    super(game, posX);
    this.game = game;
    this.positionX = posX;
    this.positionY = Math.random() * this.game.$canvas.height;
    this.height = 40;
    this.width = 60;
    this.speedY = 0;
    this.speedX = 3;
  }

  paint() {
    this.game.context.save();
    this.game.context.beginPath();
    this.game.context.fillStyle = 'grey';
    this.game.context.fillRect(this.positionX, this.positionY, this.width, this.height);
    this.game.context.closePath();
    this.game.context.restore();
  }
}

class Whale extends Enemy {
  constructor(game, posX) {
    super(game, posX);
    this.game = game;
    this.positionX = posX;
    this.positionY = Math.random() * this.game.$canvas.height;
    this.height = 70;
    this.width = 120;
    this.speedY = 0;
    this.speedX = 1;
  }

  paint() {
    this.game.context.save();
    this.game.context.beginPath();
    this.game.context.fillStyle = 'darkslategrey';
    this.game.context.fillRect(this.positionX, this.positionY, this.width, this.height);
    this.game.context.closePath();
    this.game.context.restore();
  }
}
