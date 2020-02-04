class Game {
  constructor($canvas) {
    this.$canvas = $canvas;
    this.context = this.$canvas.getContext('2d');
    this.player = new Player(this);
    this.controller = new Controller(this);
    this.scoreboard = new Scoreboard(this);
    this.oxygenPowerup = new OxygenTank(this, -100);
    this.controller.keyboardEventListeners();
    this.depth = 0;
    this.ene = [];
    this.gameStarted = false;
    this.gameIsRunning = false;
    this.gameOver = false;
    this.controller.setControlBindings();
    /* for (let i = 0; i < 50; i++) {
      let enemy = null;
      if (i % 2 === 0) enemy = new Enemy(this, 700 + i * 50);
      else enemy = new Enemy(this, -1 * (700 + i * 50));
      this.ene.push(enemy);
    } */
  }

  start() {
    this.loop();
  }

  reset() {
    this.player.reset();
    this.depth = 0;
    this.ene = [];
    this.oxygenPowerup.tanksArray = [];
    this.clearScreen();
    this.gameIsRunning = !this.gameIsRunning;
    this.start();
  }

  pause() {
    console.log('Pause was clicked');
    if (this.gameIsRunning) {
      this.gameIsRunning = !this.gameIsRunning;
    } else {
      this.gameIsRunning = !this.gameIsRunning;
      this.start();
    }
  }

  loop() {
    game.context.clearRect(0, 0, $canvas.width, $canvas.height);
    game.paint();
    game.runLogic();
    game.player.checkBoundaries();
    if (this.gameIsRunning) {
      window.requestAnimationFrame(timestamp => this.loop(timestamp));
    } /* else if (this.gameOver) {
      this.controller.$gameOverScreen.classList.toggle('fade-in');
      console.log(this.gameOver);
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
    } else if (this.player.positionY <= 100 && this.depth <= 0) {
      this.depth += 1;
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
    this.oxygenPowerup.paint();

    this.scoreboard.paint();
    for (let enemy of this.ene) {
      enemy.paint();
    }
  }

  enemyLoop() {
    if (this.depth > -1000) {
      for (let i = 0; i < 6; i++) {
        let enemy = null;
        if (i % 2 === 0) enemy = new Enemy(this, 700 + i * 50);
        else enemy = new Enemy(this, -1 * (700 + i * 50));
        this.ene.push(enemy);
      }
    } else if (this.depth > -2000) {
      for (let i = 0; i < 10; i++) {
        let enemy = null;
        if (i % 2 === 0) enemy = new Turtle(this, 700 + i * 50);
        else enemy = new Turtle(this, -1 * (700 + i * 50));
        this.ene.push(enemy);
      }
    } else if (this.depth > -3000) {
      for (let i = 0; i < 6; i++) {
        let enemy = null;
        if (i % 2 === 0) enemy = new Shark(this, 700 + i * 50);
        else enemy = new Shark(this, -1 * (700 + i * 50));
        this.ene.push(enemy);
      }
    } else if (this.depth > -5000) {
      for (let i = 0; i < 6; i++) {
        let enemy = null;
        if (i % 2 === 0) enemy = new Whale(this, 700 + i * 50);
        else enemy = new Whale(this, -1 * (700 + i * 50));
        this.ene.push(enemy);
      }
    }
  }

  runLogic() {
    this.player.runLogic();
    this.oxygenPowerup.runLogic();
    this.scoreboard.checkScore();

    for (let enemy of this.ene) {
      if (this.ene.indexOf(enemy) % 2 === 0) {
        enemy.incomingRight();
      } else {
        enemy.incomingLeft();
      }
    }
  }
}
