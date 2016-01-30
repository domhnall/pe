(function(){
  "use strict";
  const LIMIT = 100;
  let is_prime = require('../problem_7/prime.js').is_prime;

  let terms = (LIMIT-1)*(LIMIT-1);
  outer: for(let i=2; i<=LIMIT; i++) {
    inner: for(let power=2; power<=LIMIT; power++) {
      if(Math.pow(i,power)>LIMIT){
        break inner;
      }
      terms-=(Math.floor(LIMIT/power) - 1);
    }
  }

  console.log(`Answer is ${terms}`);
})();
