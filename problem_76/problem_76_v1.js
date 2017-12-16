(function(){
  "use strict";

  const N = 8;
  const CACHED = {2: new Set([[1,1].join(',')])};

  const solutions_for_n = function solutions_for_n(n){
    if(CACHED[n]){
      return CACHED[n];
    }else{
      CACHED[n] = new Set([[(n-1), 1].sort().join(',')])
      for(let i=2; i<(n-1); i++) {
	CACHED[n].add([(n-i), i].sort().join(','));
        solutions_for_n(i).forEach(function(soln){
          CACHED[n].add([(n-i), ...soln.split(',')].sort().join(','));
        });
      }
      CACHED[n].add(Array.apply(null, {length: n}).map(e => 1).join(','));

      //console.log(`Returning CACHED[${n}]: ${CACHED[n]}`);
      return CACHED[n];
    }
  };

  let solutions = solutions_for_n(N);
  console.log(`Solution is ${solutions.length}`);
})();
