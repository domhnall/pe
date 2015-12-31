var divisor = require('./divisor');
(function() {
  "use strict";

  const TARGET_DIVISORS = 500;
  let triangle_number = function(n) {
    return (1+n)*n/2;
  };

  let get_answer = function(target_divisors) {
    for(let n = 1; true; n++) {
      if(divisor.get_divisors(triangle_number(n)).length > target_divisors){
        return n;
      }
    }
  };

  let ans = get_answer(TARGET_DIVISORS);
  console.log(`Triangle number ${ans}: ${triangle_number(ans)}`);
  console.log(`Divisors: ${JSON.stringify(divisor.get_divisors(triangle_number(ans)))}`);
})();
