module.exports = function() {
  const Util = require("./utils");
  const MovingObject = require("./moving_object");
  const Ship = require("./ship");
  const Bullet = require("./bullet");

  function Asteroid(options) {
    options = options || {};
    options.color = "#666666";
    options.radius = 25;
    options.vel = options.vel || Util.randomVec(4);
  }
  Util.inherit(Asteroid, MovingObject);


};
