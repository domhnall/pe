(function(){
  "use strict";
  let nums = [];
  const LIMIT = 10000000;
  const FACS = [];

  let fac = function(n) {
    if(FACS[n]) { return FACS[n]; }
    if(n===0 || n===1){ return (FACS[n]=1); }
    return (FACS[n]=n*fac(n-1));
  };

  let sum_of_facs = function(num){
    return (''+num).split('')
                   .map((d)=>{ return parseInt(d,10); })
                   .map((d)=>{ return fac(d); })
                   .reduce((p,c)=>{ return p+c; },0);
  };

  for(let i=3; i<LIMIT; i++) {
    if(sum_of_facs(i)===i){
      nums.push(i);
    }
  }
  console.log(`Answer is ${nums.reduce((p,c)=>{ return p+c; },0)}`);
}());
