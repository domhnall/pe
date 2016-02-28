(function(){
  "use strict";
  Array.prototype.last = function(){
    return this[this.length-1];
  };

  Array.prototype.sum = function(){
    return this.reduce((p,c)=>{ return p+c; }, 0);
  };

  const next_prime = require('../problem_7/prime').next_prime;
  const is_prime = require('../problem_7/prime').is_prime_improved;
  const MAX = 1000000;

  let primes   = [2],
      sum      = 2,
      next     = 0,
      residues = [];

  while(sum<=MAX) {
    next = next_prime(primes.last());
    primes.push(next);
    sum+=next;
  }
  sum-=primes.pop();

  let max_length = 0,
      ans = [];
  main: while(true){
    if(is_prime(primes.sum())){
      if(primes.length>max_length){
        max_length = primes.length;
        ans = primes.slice();
      }
      primes = residues.concat(primes);
      residues = [];
      primes.pop();
      if(primes.length<max_length) {
        break main;
      }
    }else{
      residues.push(primes.shift());
    }
  }

  console.log(`Answer ${ans.sum()}`);
}());
