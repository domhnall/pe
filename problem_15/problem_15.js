(function(){
  "use strict";
  const N = 20;

  let fac = function(n) {
    if(n===1){ return 1; }
    return n*fac(n-1);
  };

  let ans = fac(2*N)/(fac(N)*fac(N));
  console.log(`Answer is ${ans}`);
}());
