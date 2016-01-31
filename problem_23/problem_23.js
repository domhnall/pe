(function(){
  "use strict";
  const LIMIT = 28123;

  require('../problem_21/array_utils').init();
  let is_abundant = require('../problem_12/divisor').is_abundant;
  let abundants = [];

  let abundant_sums = function(n) {
    let len = abundants.length,
        abundant_sums = [],
        sum = 0;
    for(let i=0; i<len; i++) {
      inner: for(let j=i; j<len; j++) {
        if((abundants[i]+abundants[j])>LIMIT) {
          break inner;
        } else {
          abundant_sums.push(abundants[i]+abundants[j]);
        }
      }
    }
    return abundant_sums.unique().reduce((prev,cur)=>{ return prev+cur; }, 0);
  };

  let sum_to_n = function(n) {
    return (1+n)*n/2;
  };

  for(let i=0; i<=LIMIT; i++) {
    if(is_abundant(i)){
      abundants.push(i);
    }
  }

  console.log(`Sum of qualifying numbers: ${sum_to_n(LIMIT)-abundant_sums()}`);
}());
