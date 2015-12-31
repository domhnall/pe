var prime = require('../problem_7/prime');
(function() {
  "use strict";

  const LIMIT = 2000000;
  let sum = 0;
  for(let i=2; i<LIMIT; i++) {
    if(prime.is_prime(i)) {
      console.log(`Found a prime: ${i}`);
      sum+=i;
    }
  }
  console.log(`Sum of all primes < 2000000 is: ${sum}`);
})();
