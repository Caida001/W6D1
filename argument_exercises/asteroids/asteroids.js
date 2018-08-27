module.exports = function() {
  const MovingObject = require('./moving_object');
  Asteroid.prototype.Spacerock = function () {
    this.inherit(MovingObject);
  };
};
