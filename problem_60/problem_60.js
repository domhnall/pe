(function(){
  "use strict";
  const next_prime = require('../problem_7/prime').next_prime,
        is_prime   = require('../problem_7/prime').is_prime_improved,
        MAX_ITERS  = 10000;

  let primes     = [3,7,109],
      test_prime = primes[primes.length-1];

  let passes_test = function(array, val) {
    return array.reduce(function(p,c){
      return p && is_prime(parseInt((''+c)+val,10)) && is_prime(parseInt((''+val)+c,10));
    }, true);
  };

  outer: while(true) {
    iter: while(true) {
      test_prime = next_prime(test_prime);
      console.log(`Existing primes: ${primes}`);
      console.log(`Testing ${test_prime}`);
      if(test_prime>MAX_ITERS){
        console.log(`############################### Hit limt`);
        test_prime = primes[primes.length-1];
        primes = primes.slice(0,primes.length-1);
        break iter;
      }
      if(passes_test(primes,test_prime)){
        primes.push(test_prime);
        console.log(`Found a match: ${primes}`);
        if(primes.length===5){
          break outer;
        }else{
          test_prime = primes[primes.length-1];
          break iter;
        }
      }
    }
  }

  console.log(`Answer is ${primes.reduce((p,c)=>{ return p+c; },0)}`);
}());
