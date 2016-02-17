(function(){
  "use strict";
  require('../problem_21/array_utils').init();
  const next_prime = require('../problem_7/prime').next_prime;

  const DISTINCT_FACTORS = 4;
  const PRIMES = [2,3,5,7,11];
  let ans   = 12,
      count = 0;

  let prime_factorization = function prime_factorization(num){
    let prime = 2;
    do {
      if(num===prime){
        return [prime];
      }else if(num%prime===0){
        return [prime].concat(prime_factorization(num/prime));
      }
    } while((prime=next_prime(prime))<=num);
  };

  let has_distinct_prime_factors = function(num,n){
    return (prime_factorization(num).unique().length===n);
  };

  main: for(let num=ans;; num++){
    if(has_distinct_prime_factors(num,DISTINCT_FACTORS)) {
      count++;
      if(count===DISTINCT_FACTORS){
        ans=num;
        break main;
      }
    }else{
      count=0;
    }
  }

  console.log(`Answer is ${ans-DISTINCT_FACTORS+1}`);
}());
