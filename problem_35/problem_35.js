(function(){
  "use strict";

  const LIMIT = 1000000;
  let is_prime = require('../problem_7/prime').is_prime_improved;
  let all_primes = [];
  let ans = 0;

  let rotate = function(arr) {
    arr.unshift(arr.pop());
    return arr;
  };

  for(let i=1; i<LIMIT; i+=2) {
    if(is_prime(i)) {
      all_primes.push(i);
    }
  }

  for(let i=0, len=all_primes.length; i<len; i++) {
    let digits = (''+all_primes[i]).split(''),
        is_circular = true;
    rotations: for(let j=0, len=digits.length; j<len; j++) {
      if(!is_prime(parseInt(rotate(digits).join(''),10))) {
        is_circular = false;
        break rotations;
      }
    }
    if(is_circular){ ans++; }
  }


  console.log(`Answer: ${ans}`);
}());
