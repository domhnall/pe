var prime = require('./prime');
(function() {
  "use strict";

  const TARGET_LENGTH = 10001;

  let get_primes = function(size) {
    let primes = [2], cursor=2;
    do {
      cursor+=1;
      if(prime.is_prime(cursor)){
        primes.push(cursor);
      }
    } while(primes.length<size);
    return primes;
  };
  console.log(`Answer is ${get_primes(TARGET_LENGTH).pop()}`);
})();
