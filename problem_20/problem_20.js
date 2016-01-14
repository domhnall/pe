(function() {
  "use strict";

  let fac = function(n) {
    if(n===1){ return 1; }
    return n*fac(n-1);
  };

  let ans = ('' + fac(100)).split('')
                           .map((i)=>{ return parseInt(i,10); })
                           .reduce((m,i)=>{ return m+i; });
  console.log(`Answer is ${ans}`);
})();
