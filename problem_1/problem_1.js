(function(){
  "use strict";
  const LIMIT = 1000;

  let sum_to_n = function(n) {
    return (n/2)*(n+1);
  };

  let get_sum_of_multiples = function(multiples) {
   return multiples.map((divisor)=>{ return Math.floor((LIMIT-1)/divisor); }) 
                   .map((max_multiple, i)=>{ return sum_to_n(max_multiple)*multiples[i]; })
                   .reduce((prev, cur)=>{ return prev+cur; });
  };

  console.log(`Answer: ${get_sum_of_multiples([3,5]) - get_sum_of_multiples([15])}`);
}());
