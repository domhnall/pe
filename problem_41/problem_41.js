(function(){
  "use strict";
  require('../problem_21/array_utils').init();
  let permutations = require('../problem_41/permutations').permutations;

  const DIGITS = "123456789".split('');
  const EVEN_DIGITS = "2468".split('');

  let ans = 0;
  let is_prime = require('../problem_7/prime').is_prime_improved;

  //let permutations = function(arr) {
  //  if(arr.length===1){
  //    return [arr];
  //  }
  //  let perms = [];
  //  for(let i=0, len=arr.length; i<len; i++) {
  //    let copy = arr.slice(),
  //        item = copy.splice(i,1);
  //    perms = perms.concat(permutations(copy).map((i)=>{ i.unshift(item); return i;}));
  //  } 
  //  return perms;
  //};

  let is_even = function(arr) {
    return EVEN_DIGITS.contains(arr[arr.length-1]);
  };

  outer: for(let i=9; i>1; i--){
    let perms = permutations(DIGITS.slice(0,i));
    inner: for(let j=(perms.length-1); j>=0; j--) {
      let candidate = perms[j];
      console.log(`Testing candidate ${candidate}`);
      if(is_even(candidate)){
        continue;
      }
      let num = parseInt(candidate.join(''), 10);
      if(is_prime(num)) {
        ans = num;
        break outer;
      }
    }
  }
  console.log(`Answer ${ans}`);
}());
