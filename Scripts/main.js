const $canvas = document.querySelector('canvas');
const game = new Game($canvas);

/* const loop = timestamp => {
  game.context.clearRect(0, 0, $canvas.width, $canvas.height);
  game.paint();
  game.runLogic();
  game.player.checkBoundaries();
  window.requestAnimationFrame(loop);
};

loop();
 */
setInterval(() => {
  game.enemyLoop();
}, 3000);
