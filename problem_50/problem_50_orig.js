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
  const MAX = 100;
  let primes, sum, next, residues;

  let init_primes = function() {
    primes   = [2];
    sum      = 2;
    next     = 0;
    residues = [];
    while(sum<=MAX) {
      next = next_prime(primes.last());
      primes.push(next);
      sum+=next;
    }
    sum-=primes.pop();
  };

  init_primes();
  main: while(true){
    console.log(`Primes: ${primes}`);
    console.log(`Sum of primes: ${primes.sum()}`);
    if(residues.reduce((p,c)=>{ return p+c; },0)>primes.last()) {
      console.log(`Removing last: ${primes.last()}`);
      primes = residues.concat(primes);
      residues = [];
      sum-=primes.pop();
    }
    if(is_prime(primes.sum())){
      break main;
    }else{
      residues.push(primes.shift());
    }
  }

  console.log(`Answer ${sum}`);
  console.log(`Primes lenght: ${primes.length}`);

  //init_primes();
  //let max_length = 0;
  //main_other: while(true){
  //  primes.push(next_prime(primes.last()));
  //  while(primes.sum()>MAX || !is_prime(primes.sum())){ primes.shift(); }
  //  if(primes.length<max_length){
  //    break main_other;
  //  }else{
  //    console.log(`Primes ${primes}`);
  //    sum = primes.sum();
  //    max_length = primes.length;
  //  }
  //}

  //console.log(`Answer ${sum}`);
  //console.log(`Primes lenght: ${max_length}`);
}());
