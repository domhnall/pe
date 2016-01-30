(function() {
  "use strict";
  const LIMIT = 999;

  const is_prime = require('../problem_7/prime').is_prime_improved;

  let prod = 0,
      max_primes = 0;
  for(let a=-1*LIMIT; a<=LIMIT; a++) {
    for(let b=0; b<=LIMIT; b++) {
      if(!is_prime(b)){
        continue;
      }
      let num_primes = 0;
      primes: for(let n=0; true; n++) {
        if(is_prime(n*n+a*n+b)) {
          num_primes = n+1;
        }else{
          break primes;
        }
      }
      if(num_primes>max_primes) {
        console.log(`a = ${a} and b=${b} gives ${num_primes} consecutive primes`);
        max_primes = num_primes;
        prod = a*b;
      }
    }
  }
  console.log(`Answer is ${prod}`);
})();
