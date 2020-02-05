const $canvas = document.querySelector('canvas');
const game = new Game($canvas);

setInterval(() => {
  game.enemy.enemyLoop();
}, 3000);
