(function(){
  "use strict";
  //const LIMIT = 28123;
  const LIMIT = 2000;

  let divisor = require('../problem_12/divisor');
  let abundants = [];
  let qualifying_numbers = [];

  let is_sum_of_two_abundant_numbers = function(n) {
    let len = abundants.length;
    outer: for(let i=0; i<len; i++) {
      inner: for(let j=i; j<len; j++) {
        let sum = abundants[i]+abundants[j];
        if(sum===n){
          return true;
        } else if(sum>n) {
          break inner;
        }
      }
    }
    return false;
  };

  for(let i=0; i<=LIMIT; i++) {
    if(!is_sum_of_two_abundant_numbers(i)){
      qualifying_numbers.push(i);
    }
    if(divisor.is_abundant(i)){
      abundants.push(i);
    }
  }

  console.log(`qualifying numbers ${qualifying_numbers}`);
  console.log(`abundants ${abundants}`);

  let ans = qualifying_numbers.reduce((prev, cur)=>{ return prev+cur; }, 0);
  console.log(`Sum of qualifying numbers: ${ans}`);
}());
