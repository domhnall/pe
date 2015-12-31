(function(){
  "use strict";
  const is_prime = require('../problem_7/prime').is_prime;
  const PROBLEM_TARGET = 600851475143 ;

  let start = Math.ceil(PROBLEM_TARGET/2);
  let get_next_factor = function() {
    for(let i=start; i>1; i--) {
      if (PROBLEM_TARGET%i===0) {
        console.log(`Found a factor: ${i}`);
        start = i-1;
        return i;
      }
    }
  };

  do {
    let factor = get_next_factor();
    console.log(`Next factor is ${factor}`);
    if(is_prime(factor)) {
      console.log(`Answer is ${factor}`);
      return;
    }
  } while(true);
}());
