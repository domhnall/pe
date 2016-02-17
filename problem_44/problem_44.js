(function(){
  "use strict";
  require('../problem_21/array_utils').init();
  const PENTAGONALS = [1,5,12,22,35,51,70,92,117,145];

  let get_pentagonal = function(i){
    while(i>PENTAGONALS.length){
      let index = PENTAGONALS.length;
      PENTAGONALS[index] = (index+1)*(3*(index+1)-1)/2; 
    }
    return PENTAGONALS[i-1];
  };

  let is_pentagonal = function(num) {
    let last_index=PENTAGONALS.length-1,
        current_max = PENTAGONALS[last_index];
    while(num>current_max){
      last_index++;
      current_max = PENTAGONALS[last_index] = (last_index+1)*(3*(last_index+1)-1)/2;
    }
    return PENTAGONALS.contains(num);
  };

  let solution = null,
      k = 1;
  while(!solution){
    k++;
    let test_k = get_pentagonal(k);
    for(let j=k; j>0; j--) {
      let test_j = get_pentagonal(j);
      if(is_pentagonal(test_k-test_j) && is_pentagonal(test_k+test_j)) {
        solution = (test_k-test_j);
      }
    }
  }
  console.log(`Answer ${solution}`);
}());
