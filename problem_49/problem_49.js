(function(){
  "use strict";
  require('../problem_21/array_utils').init();
  const permutations = require('../problem_41/permutations').permutations;
  const is_prime = require('../problem_7/prime').is_prime_improved;

  let solutions = [];

  let prime_permutations = function(arr) {
    return permutations(arr).map((digits)=>{ return parseInt(digits.join(''),10); })
                            .filter((num)=>{ return is_prime(num); })
                            .sort()
                            .unique();
  };

  let find_solutions = function(arr) {
    let primes    = prime_permutations(arr),
        len       = primes.length,
        solutions = [];
    if(primes.length<3){ return []; }
    for(let i=0; i<len-2; i++) {
      for(let j=i+1; j<len-1; j++) {
        for(let k=j+1; k<len; k++) {
          if((primes[j]-primes[i])===(primes[k]-primes[j])) {
            return [primes[i], primes[j], primes[k]];
          }
        }
      }
    }
    return [];
  };

  outer: for(let i=1; i<=9; i++) {
    for(let j=i; j<=9; j++) {
      for(let k=j; k<=9; k++) {
        for(let l=k; l<=9; l++) {
          let temp_solution = find_solutions([i, j, k, l]);
          if(temp_solution.length>0) {
            solutions.push(temp_solution);
          }
        }
      }
    }
  }

  for(let i=0, len=solutions.length; i<len; i++) {
    console.log(`Answer ${solutions[i].reduce((p,c)=>{ return p + c; }, '')}`);
  }
}());
