module.exports = function() {
  const MovingObject = require('./moving_object');
  Bullet.prototype.bullet = function () {
    this.inherit(MovingObject);
  };
};
