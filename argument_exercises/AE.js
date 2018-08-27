// SUMMING FUNCTIONS

function sum() {
  let arr = Array.prototype.slice.call(arguments);
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  return arr.reduce(reducer);
}

function sum2(...nums) {
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  return nums.reduce(reducer);
}


//BIND WITH ARGS

Function.prototype.myBind = function (ctx,...bindArgs) {
  return (...callargs) => {
    return this.apply(ctx, bindArgs.concat(callargs));
  };
};
// CURRY STUFF

function curriedSum (numArgs) {
  let numbers = [];
  return function _curriedSum (number) {
    numbers.push(number);
    if (numbers.length === numArgs) {
      return numbers.reduce((accumulator, currentValue) => accumulator + currentValue);
    } else {
      return _curriedSum;
    }
  };
}

Function.prototype.myCurry = function (numArgs) {
  let numbers = [];
  let that = this;
  function _curry () {
    let arr = Array.prototype.slice.call(arguments);
    numbers = numbers.concat(arr);
    if (numbers.length == numArgs){
      that.apply(null, numbers);
    } else {
      return _curry;
    }
  }
  return _curry;
};

Function.prototype.myCurry1 = function (numArgs) {
  let numbers = [];
  let that = this;
  function _curry (...args) {
    numbers = numbers.concat(args);
    if (numbers.length == numArgs){
      that.apply(null, numbers);
    } else {
      return _curry;
    }
  }
  return _curry;
};

function sumThree(num1, num2, num3) {
  return num1 + num2 + num3;
}
