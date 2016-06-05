(function(){
  "use strict";
  const num_to_array = require('../problem_56/number_arrays').num_to_array;
  const array_mult   = require('../problem_56/number_arrays').array_multiply;
  const array_sum    = require('../problem_56/number_arrays').array_sum;

  const LIMIT = 99;
  let continued = [],
      term      = [0],
      num       = [0],
      denom     = [1];

  for(let i=1; i<=LIMIT/3; i++){
    continued.push([1]);
    continued.push(num_to_array(2*i));
    continued.push([1]);
  }

  let tmp = null;
  while(term = continued.pop()){
    console.log(`Numerator ${num}`);
    console.log(`Denom ${denom}`);
    tmp = array_sum(array_mult(term,denom),num);
    num = denom;
    denom = tmp;
  }
  num = array_sum(array_mult([2], denom),num);

  //console.log(`Answer is ${(''+num).split('').reduce((p,c)=>{ return p+parseInt(c,10); },0)}`);
  console.log(`Answer is ${num.reduce((p,c)=>{ return p+parseInt(c,10); },0)}`);
}());
