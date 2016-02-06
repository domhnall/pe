(function(){
  "use strict";

  let is_prime = require('../problem_7/prime').is_prime_improved;
  let truncatable_primes = [],
      i = 10;

  let is_truncatable = function(num){
    let digits = (''+num).split('');
    for(let i=digits.length-1; i>0; i--) {
      if(!is_prime(parseInt(digits.slice(i).join(''), 10))){
        return false;
      }
    }

    for(let i=1, len=digits.length; i<len; i++){
      if(!is_prime(parseInt(digits.slice(0,i).join(''), 10))){
        return false;
      }
    }
    return true;
  };

  do{
    i++;
    if(is_prime(i) && is_truncatable(i)){
      console.log(`Found a truncatable prime: ${i}`);
      truncatable_primes.push(i);
    }
  }while(truncatable_primes.length<11);

  console.log(truncatable_primes);
  console.log(`Answer ${truncatable_primes.reduce((p,c)=>{return p+c;})}`);
}());
