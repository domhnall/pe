(function() {
  "use strict";
  /*
  * LIMIT = 10**n where n is the smallest integer satisfying:
  * n*9**5 < 10**n
  */
  const N = 5;
  const LIMIT = Math.pow(10,N+1);

  let sum_of_digits_power = function(i,n){
    return (''+i).split('')
                 .map((d)=>{ return parseInt(d,10); })
                 .reduce((p,c)=>{ return p+Math.pow(c,n); }, 0);
  };

  let qualifying_numbers = [];
  for(let i=10; i<LIMIT; i++) {
    if(sum_of_digits_power(i,N)===i) {
      qualifying_numbers.push(i);
    }
  }

  console.log(`Qualifying numbers ${qualifying_numbers}`);
  let ans = qualifying_numbers.reduce((p,c)=>{return p+c;},0);
  console.log(`Answer is ${ans}`);
}());
