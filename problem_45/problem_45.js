(function(){
  "use strict";
  require('../problem_21/array_utils').init();

  const TRIANGULARS = [1,3,6,10,15,21,28,36,45,55],
        PENTAGONALS = [1,5,12,22,35,51,70,92,117,145],
        HEXAGONALS  = [1,6,15,28,45];

  let is_triangular = function(num) {
    let last_index = TRIANGULARS.length-1,
        current_max = TRIANGULARS[last_index];
    while(num>current_max){
      last_index++;
      current_max = TRIANGULARS[last_index] = (last_index+1)*(last_index+2)/2;
    }
    return TRIANGULARS.contains(num);
  };

  let is_pentagonal = function(num) {
    let last_index = PENTAGONALS.length-1,
        current_max = PENTAGONALS[last_index];
    while(num>current_max){
      last_index++;
      current_max = PENTAGONALS[last_index] = (last_index+1)*(3*(last_index+1)-1)/2;
    }
    return PENTAGONALS.contains(num);
  };

  let is_hexagonal = function(num) {
    let last_index = HEXAGONALS.length-1,
        current_max = HEXAGONALS[last_index];
    while(num>current_max){
      last_index++;
      current_max = HEXAGONALS[last_index] = (last_index+1)*(2*(last_index+1)-1);
    }
    return HEXAGONALS.contains(num);
  };

  let ans = 40755;
  main: for(let i=144;; i++) {
    ans = i*(2*i-1);
    if(is_pentagonal(ans)) {
      console.log(`Found pentagonal ${ans}`);
      if(is_triangular(ans)) {
        console.log(`Found triangular ${ans}`);
        break main;
      }
    }
  }
  console.log(`Answer is ${ans}`);
}());
