(function(){
  "use strict";
  const is_prime = require('../problem_7/prime').is_prime_improved;

  Array.prototype.last = function(){
    return this[this.length-1];
  };

  let diagonals = [1],
      side_length = 1,
      total_primes = 0,
      next_diag = null;
  main: while(true){
    side_length+=2;
    for(let i=0; i<4; i++){
      next_diag = diagonals.last()+(side_length-1);
      diagonals.push(next_diag);
      if(is_prime(next_diag)){ total_primes++; }
    }
    console.log(`For side length ${side_length} ratio is ${(total_primes/diagonals.length)*100}`);
    if((total_primes/diagonals.length)<0.1){
      console.log(`Answer is ${side_length}`);
      break main;
    }
  }
}());
