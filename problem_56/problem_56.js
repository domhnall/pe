(function(){
  "use strict";

  const num_to_array = require('../problem_56/number_arrays').num_to_array;
  const array_power = require('../problem_56/number_arrays').array_power;
  const LIMIT = 100;

  let max_count = 0,
      count = 0;
  for(let i=1; i<LIMIT; i++) {
    for(let j=1; j<LIMIT; j++) {
      count = array_power(num_to_array(i),j).reduce((p,c)=>{ return p+c; }, 0);
      let pow = array_power(num_to_array(i),j);
      count = pow.reduce((p,c)=>{ return p+c; }, 0);
      if(count>max_count){
        max_count=count;
      }
    }
  }
  console.log(`Answer is ${max_count}`);
}());
