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

  return d;
})(DIVISOR || {});

module.exports = DIVISOR;
