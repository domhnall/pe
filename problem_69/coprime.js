var COPRIME = (function(cp) {
  "use strict";

  cp.greatest_common_divisor = function(a,b){
    if(b<a){ return cp.greatest_common_divisor(b,a); }
    let rem = b%a;
    if(rem===0){
      return a;
    }else{
      return cp.greatest_common_divisor(rem,a);
    }
  };

  cp.are_coprime = function(a,b) {
    if(b<a){ return p.are_coprime(b,a); }
    return cp.greatest_common_divisor(a,b)===1;
  };

  return cp;
})(COPRIME || {});

module.exports = COPRIME;
