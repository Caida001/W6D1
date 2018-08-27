module.exports = function() {
  const Util = require("./utils");
  const MovingObject = require("./moving_object");
  const Ship = require("./ship");
  const Bullet = require("./bullet");

  function GameView (ctx) {
    this.game = ths.game || new Game();
    this.ctx = ctx;
  }

  GameView.prototype.start = function () {
    setInterval(this.game.moveObjects(), this.game.draw(this.ctx), 20);
  };

};
