var Fraction = require('../problem_71/fraction');
(function() {
  "use strict";
  const MAX_DENOM = 1000000;

  let frac  = null,
      max   = new Fraction(1,MAX_DENOM),
      limit = new Fraction(3,7);
  outer: for(let d=MAX_DENOM; d>1; d--){
    inner: for(let n=1, max_n=(MAX_DENOM-1); n<max_n; n++){
      frac = new Fraction(n,d);
      if(frac.smallerThan(limit) && max.smallerThan(frac)){
        max = frac;
      }else{
        break inner;
      }
    }
  }

  console.log(`Answer is ${max.reduce()}`);
})();
