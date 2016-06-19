var Fraction = require('../problem_71/fraction');
(function() {
  "use strict";
  const MAX_DENOM = 12000;

  let frac  = null,
      fracs = new Set(),
      lower = new Fraction(1,3),
      upper = new Fraction(1,2),
      max   = new Fraction(1,MAX_DENOM);

  outer: for(let d=MAX_DENOM; d>1; d--){
    inner: for(let n=1, max_n=(d-1); n<max_n; n++){
      frac = new Fraction(n,d);
      if(frac.smallerThan(upper)) {
        if(lower.smallerThan(frac)){
          fracs.add(frac.reduce().toString());
        }
      }else{
        break inner;
      }
    }
  }

  //console.log(fracs);
  console.log(`Answer is ${fracs.size}`);
})();
