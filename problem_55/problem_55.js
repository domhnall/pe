(function(){
  "use strict";
  require('../problem_21/array_utils').init();

  const LIMIT = 10000;
  const MAX_ITERATIONS = 50;
  let lychrels = [];

  let is_palindrome = function(arr){
    return arr.equals(arr.slice().reverse());
  };

  let array_sum = function(a, b) {
    let a_rev = a.reverse(),
        b_rev = b.reverse(),
        ans_rev = [],
        carried = 0;
    for(let i=0, len=a_rev.length; i<len; i++) {
      ans_rev[i] = (a[i]+b[i]+carried)%10;
      carried    = Math.floor((a[i]+b[i]+carried)/10);
    }
    if(carried>0){ ans_rev.push(carried); }
    return ans_rev.reverse();
  };

  for(let i=0; i<LIMIT; i++) {
    let is_lychrel = true,
        num_arr = (''+i).split('')
                        .map((d)=>{ return parseInt(d,10); });

    its: for(let j=0; j<MAX_ITERATIONS; j++) {
      let sum = array_sum(num_arr, num_arr.slice().reverse());
      if(is_palindrome(sum)){
        is_lychrel = false;
        break its;
      }else{
        num_arr = sum;
      }
    }
    if(is_lychrel){ lychrels.push(i); }
  }

  console.log(`answer ${lychrels.length}`);
}());
