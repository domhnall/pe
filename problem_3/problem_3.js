(function(){
  "use strict";
  const is_prime = require('../problem_7/prime').is_prime_improved;
  const PROBLEM_TARGET = 600851475143 ;

  let answer = null;
  for(let i=3, limit=Math.ceil(Math.sqrt(PROBLEM_TARGET)); i<limit; i+=2) {
    if(PROBLEM_TARGET%i===0) {
      if(is_prime(i)) {
        answer = i;
      }
    }
  }
  console.log(`Answer is ${answer}`);
}());
