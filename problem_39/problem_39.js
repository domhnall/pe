(function(){
  "use strict";
  const MAX = 1000;

  let is_solution = function(p,a,b) {
    return ((p*p - 2*p*(a+b) + 2*a*b)===0);
  };
  let solutions_max = 0,
      ans = 0;
  for(let p=3; p<=MAX; p++) {
    let solutions = 0;
    for(let a=1; a<p; a++) {
      for(let b=a, len=(p-a); b<len; b++) {
        if(is_solution(p,a,b)) {
          solutions++;
          if(solutions>solutions_max) {
            solutions_max=solutions;
            ans = p;
          }
        }
      }
    }
  }
  
  console.log(`answer is ${ans}`);
}());
