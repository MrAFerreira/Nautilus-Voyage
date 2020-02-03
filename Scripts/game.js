class Game {
  constructor($canvas) {
    this.$canvas = $canvas;
    this.context = this.$canvas.getContext('2d');
    this.player = new Player(this);
    this.controller = new Controller(this);
    this.scoreboard = new Scoreboard(this);
    //this.enemy = new Enemy(this);
    this.controller.keyboardEventListeners();
    this.depth = 0;
    this.ene = [];
    /* for (let i = 0; i < 50; i++) {
      let enemy = null;
      if (i % 2 === 0) enemy = new Enemy(this, 700 + i * 50);
      else enemy = new Enemy(this, -1 * (700 + i * 50));
      this.ene.push(enemy);
    } */
  }

  background() {
    this.context.save();
    //let depthCounter = 0;
    let gradient = this.context.createLinearGradient(
      this.$canvas.width / 2,
      this.depth,
      this.$canvas.width / 2,
      5000 - Math.abs(this.depth)
    );
    gradient.addColorStop(0, 'cyan');
    gradient.addColorStop(0.25, 'dodgerblue');
    gradient.addColorStop(0.5, 'mediumblue');
    gradient.addColorStop(0.75, 'midnightblue');
    gradient.addColorStop(1, 'black');
    this.context.fillStyle = gradient;
    if (this.player.positionY >= 550) {
      this.depth--;
      console.log(this.depth);
    } else if (this.player.positionY <= 100 && this.depth <= 0) {
      this.depth += 1;
      console.log(this.depth);
    }
    this.context.fillRect(0, 0, this.$canvas.width, this.$canvas.height);
    this.context.restore();
  }

  clearScreen() {
    const context = this.context;
    context.clearRect(0, 0, this.$canvas.width, this.$canvas.height);
  }

  paint() {
    this.clearScreen();
    this.background();
    this.player.paint();
    this.scoreboard.paint();
    for (let enemy of this.ene) {
      enemy.paint();
    }
  }

  enemyLoop() {
    for (let i = 0; i < 6; i++) {
      let enemy = null;
      if (i % 2 === 0) enemy = new Enemy(this, 700 + i * 50);
      else enemy = new Enemy(this, -1 * (700 + i * 50));
      this.ene.push(enemy);
    }
  }
  /*  enemyLoop() {
    const enemy = new Enemy(this);
    if (this.enemies.length > 50) {
      this.enemies.pop();
    }
  } */

  runLogic() {
    this.player.newPos();
    this.player.oxygenLevels();

    for (let enemy of this.ene) {
      if (this.ene.indexOf(enemy) % 2 === 0) {
        enemy.incomingRight();
      } else {
        enemy.incomingLeft();
      }
    }
  }
  // this.enemy.incomingLeft();
}

/* setInterval(() => {
  game.enemyLoop();
}, 5000); */
