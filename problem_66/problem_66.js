/* Problem 66
*
* x^2-D*y^2 = 1
*
* We can see that in the limit of large x and y SQRT(D) ~ x/y
*
* By problem 65:
* SQRT(D) can be written as an infinite continued fraction.
* It turns out that the sequence of partial values of continued fractions for square roots provide the best rational approximations.
*
* So we get the continued fraction representation for the square root and use the partial values as our guesses for (x,y).
*
*/
(function(){
  "use strict";
  require('../problem_21/array_utils.js').init();
  const num_to_array = require('../problem_56/number_arrays').num_to_array;
  const array_mult   = require('../problem_56/number_arrays').array_multiply;
  const array_sum    = require('../problem_56/number_arrays').array_sum;
  const array_diff   = require('../problem_56/number_arrays').array_difference;

  const LIMIT = 1000;
  const SQUARES = Array.apply(null, {length: 33})
                       .map(Number.call, Number)
                       .map((el)=>{ return el*el; });

  let is_square = function(d){
    return SQUARES.contains(d);
  };

  let continued_frac = function(num){
    let a  = 1,
        as = [a],
        b  = Math.floor(Math.sqrt(num)),
        bs = [b],
        components = [b];
    if(b*b===num){ return []; }
    repeat: while(true){
      let a_prime = (num-b*b)/a,
          x = Math.floor((Math.sqrt(num)+b)/a_prime),
          b_prime = x*((num-b*b)/a)-b;
      if(components[1] && as[0]===a && bs[0]===b){
        break repeat;
      } else {
        components.push(x);
      }
      as.push(a=a_prime);
      bs.push(b=b_prime);
    }
    return components;
  };

  let is_solution = function(d,x,y){
    let x_squared = array_mult(x,x),
        d_y_squared = array_mult(array_mult(num_to_array(d), y), y);
    return parseInt(array_diff(x_squared, d_y_squared).join(''), 10)===1;
  };

  let build_test_array = function(int_val, rep, len){
    let test_array = [int_val],
        rep_len = rep.length;
    for(let i=0; i<len; i++){
      test_array.push(rep[i%rep_len]);
    }
    return test_array;
  };

  let frac_representation = function(array){
    let num = [1],
        denom = [array.pop()],
        temp = 0;
    while(temp = array.pop()){
      num = array_sum(array_mult([temp],denom), num);
      temp = denom;
      denom = num;
      num = temp;
    }
    // We will have done an unnecessary inversion on last iteration, lets undo here ...
    return [denom, num];
  };

  let find_min_solution_for_d = function(d){
    let continued_rep = continued_frac(d),
        int_val = continued_rep[0],
        repeating = continued_rep.slice(1),
        frac_rep = [];
    for(let len=1; ; len++){
      frac_rep = frac_representation(build_test_array(int_val, repeating, len));
      if(is_solution(d,frac_rep[0],frac_rep[1])){
        return [frac_rep[0],frac_rep[1]];
      }
    }
  };

  let max_x = 0,
      max_d = 0,
      cur_x = 0,
      solution = [];
  for(let d=2; d<=LIMIT; d++) {
    if(is_square(d)){ continue; }
    solution = find_min_solution_for_d(d);
    console.log(`Solution for d = ${d}: (${solution[0]}, ${solution[1]})`);
    cur_x = parseInt(solution[0].join(''),10);
    if(cur_x>max_x){
      max_x = cur_x;
      max_d = d;
    }
  }

  console.log(`Solution is ${max_d}`);
})();
