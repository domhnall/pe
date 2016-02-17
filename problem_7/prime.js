var PRIME = (function(p) {
  "use strict";

  p.is_prime = function(val) {
    if(val<2){ return false; }
    let half = Math.floor(val/2)+1;
    for(let i = 2; i<half; i++) {
      if(val%i===0){
        return false;
      }
    }
    return true;
  };

  let cached_primes = null;
  let init_primes_cache = function(limit) {
    cached_primes = [2];
    for(let i = 3; i<10000; i++) {
      if(p.is_prime(i)) {
        cached_primes.push(i);
      }
    }
  };

  p.is_prime_improved = function(int) {
    if(!cached_primes){
      init_primes_cache(10000);
    }
    if(cached_primes.indexOf(int)>0){
      return true;
    } else {
      return p.is_prime(int);
    }
  };

  p.next_prime = function(num) {
    if(!cached_primes){
      init_primes_cache(10000);
    }
    let index = cached_primes.indexOf(num);
    if(index>=0 && index<(cached_primes.length-1)){
      return cached_primes[index+1];
    }
    prime_test: for(let i=(num+1);; i++) {
      for(let j=0, len=cached_primes.length; j<len; j++) {
        if(i%cached_primes[j]===0){
          continue prime_test;
        }
      }
      cached_primes.push(i);
      return i;
    }
  };

  return p;
})(PRIME || {});

module.exports = PRIME;
