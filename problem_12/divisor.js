var DIVISOR = (function(d) {
  "use strict";
  require('../problem_21/array_utils').init();

  d.get_divisors = function(n) {
    let divisors = [],
        max = Math.ceil(Math.sqrt(n));
    for(let i=1; i<=max; i++) {
      if(n%i===0) {
        divisors.push(i);
        divisors.push(n/i);
      }
    }
    return divisors.unique();
  };

  d.get_proper_divisors = function(n) {
    let proper_divisors = d.get_divisors(n),
        index = proper_divisors.indexOf(n);

    proper_divisors.splice(index,1);
    return proper_divisors;
  };

  let sum_proper_divisors = function(n) {
    return d.get_proper_divisors(n)
            .reduce((prev,cur)=>{return prev+cur;}, 0);
  };

  d.is_abundant = function(n){
    return n < sum_proper_divisors(n);
  };

  d.is_perfect = function(n) {
    return n === sum_proper_divisors(n);
  };

  return d;

})(DIVISOR || {});

module.exports = DIVISOR;
