class Game {
  constructor($canvas) {
    this.$canvas = $canvas;
    this.context = this.$canvas.getContext('2d');
    this.player = new Player(this);
    this.controller = new Controller(this);
    this.scoreboard = new Scoreboard(this);
    this.enemy = new Enemy(this, 0);
    this.oxygenPowerup = new OxygenTank(this, -100);
    this.controller.keyboardEventListeners();
    this.depth = 0;
    this.gameStarted = false;
    this.gameIsRunning = false;
    this.difficulty = 1000;
    //this.gameOver = false;
    this.controller.setControlBindings();
    this.mainTheme = new Audio('audio/ambient2(Nautilus).mp3');
    this.hitSound = new Audio('audio/qubodupImpactWood.ogg');
    this.powerupSound = new Audio('audio/SFX_Powerup_01.wav');
  }

  start() {
    this.enemyTimer();
    this.loop();
    this.mainTheme.play();
  }

  reset() {
    this.player.reset();
    this.depth = 0;
    this.enemy.ene = [];
    this.oxygenPowerup.tanksArray = [];
    this.clearScreen();
    this.gameIsRunning = !this.gameIsRunning;
    this.loop();
  }

  pause() {
    if (this.gameIsRunning) {
      this.gameIsRunning = !this.gameIsRunning;
    } else {
      this.gameIsRunning = !this.gameIsRunning;
      this.loop();
    }
  }

  loop() {
    game.context.clearRect(0, 0, $canvas.width, $canvas.height);
    game.paint();
    game.runLogic();
    //game.player.checkBoundaries();
    if (this.gameIsRunning) {
      window.requestAnimationFrame(timestamp => this.loop(timestamp));
    }
  }

  background() {
    this.context.save();
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
    if (this.player.positionY >= 101) {
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
    for (let enemy of this.enemy.ene) {
      enemy.paint();
    }
  }

  runLogic() {
    this.player.runLogic();
    this.oxygenPowerup.runLogic();
    this.scoreboard.runLogic();

    for (let enemy of this.enemy.ene) {
      if (enemy.width === 15 || enemy.width === 40) {
        enemy.incomingUp();
      } else if (this.enemy.ene.indexOf(enemy) % 2 === 0) {
        enemy.incomingRight();
      } else {
        enemy.incomingLeft();
      }
    }
  }

  enemyTimer() {
    if (this.gameIsRunning) {
      setInterval(() => {
        this.enemy.enemyLoop();
        //this.enemy.enemyLoopVertical();
      }, this.difficulty);
    }
  }
}
