(function(){
  "use strict";

  require('../problem_21/array_utils.js').init();

  const LIMIT = 1000000,
        THRESHOLD = 60;
  const fac = function(n) {
    if(n===0 || n===1){ return 1; }
    return n*fac(n-1);
  };

  const FACTORIALS = [0,1,2,3,4,5,6,7,8,9].map((i)=> fac(i));

  const as_digits = function(num) {
    return (''+num).split('').map((d)=>{ return parseInt(d,10); });
  };

  const sum_of_facs = function(num){
    return as_digits(num).reduce((memo, i)=>{ return memo+fac(i); }, 0);
  };

  const chain = function(num){
    let chain = [],
        next = num;
    do{
      chain.push(next);
      next = sum_of_facs(next);
    }while(!chain.contains(next));

    return chain;
  };

  const chain_length = function(num) {
    return chain(num).length;
  };

  let count = 0;
  for(let i=0; i<LIMIT; i++){
    if(chain_length(i)===THRESHOLD){ 
      console.log(`Found one for: ${i}`);
      count+=1;
    }
  }

  console.log(`Answer is ${count}`);
})();
