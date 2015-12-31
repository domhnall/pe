(function() {
  "use strict";

  const PRIME_FACTORS = [ 19, 17, 13, 11, 7, 5, 3, 2 ];
  const TEST_FACTORS = [ 20, 18, 16, 15, 14, 12 ];
  const STEP = PRIME_FACTORS.reduce((prev, cur)=>{ return cur*prev; }, 1);

  let answer = null;
  outer: for(let i=STEP; ; i+=STEP) {
    inner: for(let j=0, len=TEST_FACTORS.length; j<len; j++) {
      console.log(`i is ${i} and j is ${TEST_FACTORS[j]}`);
      if((i%TEST_FACTORS[j])!==0) {
        break inner;
      }
      if(j===(len-1)){ 
        answer = i;
        break outer;
      }
    }
  }

  console.log(`Answer is ${answer}`);
}());
