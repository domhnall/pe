(function(){
  "use strict";

  const REQUIRED_LENGTH = 1000;

  let ans = 3,
      fib_n = 2,
      fib_n_minus_1 = 1,
      fib_n_minus_2 = 1;

  do {
    ans++;
    fib_n_minus_2 = fib_n_minus_1;
    fib_n_minus_1 = fib_n;
    fib_n = fib_n_minus_1 + fib_n_minus_2;
    console.log(`Fib n ${fib_n}`);
  } while((fib_n+'').length<REQUIRED_LENGTH);

  console.log(`Answer is ${ans}`);
})();
