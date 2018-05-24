function Game() {

}

Game.prototype.init = function () {
  this.gameWorld = new GameWorld();
}

Game.prototype.start = function () {

  PoolGame.init();

  PoolGame.mainLoop();
}

Game.prototype.mainLoop = function () {

  canvas.clear();
  PoolGame.gameWorld.update();
  PoolGame.gameWorld.draw();
  Mouse.reset();

  requestAnimationFrame(PoolGame.mainLoop);
}

let PoolGame = new Game();