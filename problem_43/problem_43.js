(function(){
  "use strict";
  const DIGITS = "0123456789".split('');
  const permutations = require('../problem_41/permutations').permutations;
  const PRIMES = [2, 3, 5, 7, 11, 13, 17];

  let all_perms = permutations(DIGITS),
      sum = 0;

  let qualifying_substrings = function(arr) {
    return PRIMES.reduce((p,c,i)=>{ return p && parseInt(arr.slice(i+1,i+4).join(''),10)%c===0;}, true);
  };

  for(let i=0, len=all_perms.length; i<len; i++) {
    let digit_arr = all_perms[i];
    if(qualifying_substrings(digit_arr)) {
      sum += parseInt(digit_arr.join(''),10);
    }
  }
  console.log(`Answer is ${sum}`);
}());
