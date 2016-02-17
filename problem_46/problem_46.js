(function(){
  "use strict";
  const is_prime = require('../problem_7/prime').is_prime_improved;
  const next_prime = require('../problem_7/prime').next_prime;

  let decomposable = function(num){
    let prime = 2;
    prime: while(prime<num){
      squares: for(let i=1;;i++){
        let sum = prime+2*(i*i);
        if(sum>num){
          break squares;
        }else if(sum===num){
          return true;
        }
      }
      prime = next_prime(prime);
    }
    return false;
  };

  let ans = 3;
  main: for(let i=3;; i+=2){
    if(!is_prime(i)) {
      if(!decomposable(i)) {
        ans = i;
        break main;
      }
    }
  }

  console.log(`Answer is ${ans}`);
}());
