module.exports = function() {
  const MovingObject = require('./moving_object');
  Ship.prototype.Ship = function () {
    this.inherit(MovingObject);
  };
};
