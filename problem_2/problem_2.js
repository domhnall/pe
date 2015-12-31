(function() {
  'use strict';
  const MAX_VAL = 4000000;

  var fib = function(n) {
    if(n>2) {
      return fib(n-2)+fib(n-1);
    } else if(n===2) {
      return 2;
    } else {
      return 1;
    }
  };

  let sum = 0,
      val = 2,
      i = 2;
  do{
    sum += val;
    val = fib(i+=3);
  } while(val<MAX_VAL);

  console.log(sum);
})();
