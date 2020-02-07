class Enemy {
  constructor(game, posX) {
    this.game = game;
    this.positionX = posX;
    this.positionY = Math.random() * this.game.$canvas.height + 50;
    this.height = 15;
    this.width = 30;
    this.speedY = 0;
    this.speedX = 2;
    this.direction;
    this.ene = [];
  }

  incomingLeft() {
    if (this.game.player.positionY >= 450) {
      this.speedY += this.game.player.speedY * this.game.player.gravitySpeed;
      this.positionY -= this.speedY;
    }
    this.direction = 'west';
    this.positionX += this.speedX;
  }

  incomingRight() {
    if (this.game.player.positionY >= 450) {
      this.speedY += this.game.player.speedY * this.game.player.gravitySpeed;
      this.positionY -= this.speedY;
    }
    this.direction = 'east';
    this.positionX -= this.speedX;
  }

  incomingUp() {
    this.positionY -= 3;
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
    } else if (this.game.depth > -4000) {
      for (let i = 0; i < 6; i++) {
        let enemy = null;
        enemy = new Jellyfish(this.game, 700 + i * 50);
        this.ene.push(enemy);
      }
    } else if (this.game.depth > -5500) {
      for (let i = 0; i < 2; i++) {
        let enemy = null;
        if (i % 2 === 0) enemy = new Whale(this.game, 700 + i * 50);
        else enemy = new Whale(this.game, -1 * (700 + i * 50));
        this.ene.push(enemy);
      }
    } else if (this.game.depth > -7000) {
      for (let i = 0; i < 6; i++) {
        let enemy = null;
        enemy = new Anglerfish(this.game, 700 + i * 50);
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
    this.positionY = Math.random() * this.game.$canvas.height + 50;
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
    this.positionY = Math.random() * this.game.$canvas.height + 50;
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
    this.positionY = Math.random() * this.game.$canvas.height + 50;
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

class Jellyfish extends Enemy {
  constructor(game, posX) {
    super(game, posX);
    this.game = game;
    this.positionX = Math.random() * this.game.$canvas.width;
    this.positionY = posX;
    this.height = 30;
    this.width = 15;
    this.speedY = 2;
    this.speedX = 0;
    this.ene = [];
  }

  paint() {
    let jellyfishImageUrl = 'imgs/jellyfish.png';
    let jellyfishImage = new Image();
    jellyfishImage.src = jellyfishImageUrl;
    this.game.context.drawImage(jellyfishImage, this.positionX, this.positionY);
  }
}

class Anglerfish extends Enemy {
  constructor(game, posX) {
    super(game, posX);
    this.game = game;
    this.positionX = Math.random() * this.game.$canvas.width;
    this.positionY = posX;
    this.height = 50;
    this.width = 40;
    this.speedY = 2;
    this.speedX = 0;
    this.ene = [];
  }

  paint() {
    let anglerfishImageUrl = 'imgs/anglerfish.png';
    let anglerfishImage = new Image();
    anglerfishImage.src = anglerfishImageUrl;
    this.game.context.drawImage(anglerfishImage, this.positionX, this.positionY);
  }
}
