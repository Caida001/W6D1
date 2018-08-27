module.exports = function() {
  const Util = require("./utils");
  const MovingObject = require("./moving_object");
  const Ship = require("./ship");
  const Bullet = require("./bullet");

  let asteroids = [];

  function Game() {
    this.DIM_X = 1000;
    this.DIM_Y = 1000;
    this.NUM_ASTEROIDS = 10;
    this.addAsteroids();
  }

  Game.prototype.addAsteroids = function () {
    while (asteroids.length < 10) {
      asteroids.push(new Asteroid({pos: randomPosition()})
    };
  }

  Game.prototype.randomPosition = function() {
     return [Math.floor(Math.random() * (1000)), Math.floor(Math.random() * (1000))]
  }

  Game.prototype.draw(ctx) {
    ctx.clearRect();
  }

  asteroids.forEach((el) => {
    el.draw(ctx)
  })

  Game.prototype.moveObjects = function () {
    asteroids.forEach((el) => {
      el.move();
    })
  }

};
