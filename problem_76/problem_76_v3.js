(function(){
  "use strict";

  const N = 9;
  const CACHED = {2: [[1,1]], 3: [[2,1],[1,1,1]]};

  const solutions_for_n = function solutions_for_n(n){
    if(CACHED[n]){
      return CACHED[n];
    }else{
      let soln_for_n = [[(n-1),1]],
          prev       = solutions_for_n(n-1),
          augmented  = null;

      // New entries
      for(let i=0, max=prev.length; i<max; i++){
        let soln     = prev[i],
            length   = soln.length,
            new_soln = null;
        if(soln[length-1]<soln[length-2]){
          new_soln = soln.slice();
          new_soln[length-1] += 1;
          soln_for_n.push(new_soln);
        }
      }

      // Augment solutions from previous
      prev.forEach(s => s.push(1));
      soln_for_n = prev.concat(soln_for_n);

      console.log(`There are ${soln_for_n.length} solutions for ${n}`);
      console.log(soln_for_n);
      return soln_for_n;
    }
  };

  console.log(`Solution is ${solutions_for_n(N).length}`);
})();
