//Accept a single argument, which is a callback function.
//Call the callback function inside its body.

function receivesAFunction(callback) {
    callback();
  }

//take no arguments.return a named function
  function returnsANamedFunction() {
    function namedFunction() {
      console.log("This is a named function!");
    }
    return namedFunction;
  }

  //take no arguments. return an anonymous function
  function returnsAnAnonymousFunction() {
    return function() {
      console.log("This is an anonymous function!");
    };
  }