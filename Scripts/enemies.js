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
    this.ene = [];
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

  enemyLoop() {
    if (this.game.depth > -1000) {
      for (let i = 0; i < 6; i++) {
        let enemy = null;
        if (i % 2 === 0) enemy = new Enemy(this.game, 700 + i * 50);
        else enemy = new Enemy(this.game, -1 * (700 + i * 50));
        this.ene.push(enemy);
      }
    } else if (this.game.depth > -2000) {
      for (let i = 0; i < 10; i++) {
        let enemy = null;
        if (i % 2 === 0) enemy = new Turtle(this.game, 700 + i * 50);
        else enemy = new Turtle(this.game, -1 * (700 + i * 50));
        this.ene.push(enemy);
      }
    } else if (this.game.depth > -3000) {
      for (let i = 0; i < 6; i++) {
        let enemy = null;
        if (i % 2 === 0) enemy = new Shark(this.game, 700 + i * 50);
        else enemy = new Shark(this.game, -1 * (700 + i * 50));
        this.ene.push(enemy);
      }
    } else if (this.game.depth > -5000) {
      for (let i = 0; i < 6; i++) {
        let enemy = null;
        if (i % 2 === 0) enemy = new Whale(this.game, 700 + i * 50);
        else enemy = new Whale(this.game, -1 * (700 + i * 50));
        this.ene.push(enemy);
      }
    }
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
    this.ene = [];
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
    this.width = 100;
    this.speedY = 0;
    this.speedX = 3;
    this.ene = [];
  }

  paint() {
    let sharkImageUrl;
    if (this.direction === 'east') {
      sharkImageUrl = 'imgs/shark_east.png';
    } else {
      sharkImageUrl = 'imgs/shark_west.png';
    }
    let sharkImage = new Image();
    sharkImage.src = sharkImageUrl;
    this.game.context.drawImage(sharkImage, this.positionX, this.positionY);
  }
}

class Whale extends Enemy {
  constructor(game, posX) {
    super(game, posX);
    this.game = game;
    this.positionX = posX;
    this.positionY = Math.random() * this.game.$canvas.height;
    this.height = 100;
    this.width = 300;
    this.speedY = 0;
    this.speedX = 1;
    this.ene = [];
  }

  paint() {
    let whaleImageUrl;
    if (this.direction === 'east') {
      whaleImageUrl = 'imgs/whale_east.png';
    } else {
      whaleImageUrl = 'imgs/whale_west.png';
    }
    let whaleImage = new Image();
    whaleImage.src = whaleImageUrl;
    this.game.context.drawImage(whaleImage, this.positionX, this.positionY);
  }
}
