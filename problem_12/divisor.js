var DIVISOR = (function(d) {
  "use strict";

  d.get_divisors = function(n) {
    let divisors = [],
        max = Math.ceil(Math.sqrt(n));
    for(let i=1; i<max; i++) {
      if(n%i===0) {
        divisors.push(i);
        divisors.push(n/i);
      }
    }
    return divisors;
  };

  d.get_proper_divisors = function(n) {
    let proper_divisors = d.get_divisors(n),
        index = proper_divisors.indexOf(n);

    proper_divisors.splice(index,1);
    return proper_divisors;
  };

  return d;
})(DIVISOR || {});

module.exports = DIVISOR;
