(function(){
  "use strict";

  const LIMIT = 10000;

  require('./array_utils.js').init();
  let divisor = require('./../problem_12/divisor');

  let get_sum_proper_divisors = function(n){
    return divisor.get_proper_divisors(n).reduce((prev,cur) => { return prev+cur; }, 0);
  };

  let pairs = [];
  for(let i=1; i<LIMIT; i++) {
    let sum = get_sum_proper_divisors(i);
    if(get_sum_proper_divisors(sum)===i && sum!==i) {
      console.log(`Amicable pair found: ${i}, ${sum}`);
      pairs.push(i);
      pairs.push(sum);
    }
  }

  console.log(`Answer is: ${pairs.unique().reduce((prev,cur)=>{ return prev+cur; }, 0)}`);

}());
