(function(){
  "use strict";

  const N = 100;
  const CACHED = {2: [[1,1]], 3: [[2,1],[1,1,1]]};

  const solutions_for_n = function solutions_for_n(n){
    if(n===3){
      return { total: 2, carried_forward: [[2,1], undefined] };
    }else{
      let prev            = solutions_for_n(n-1),
          total           = prev.total+1,
          carried_forward = [[(n-1),1]];

      // New entries
      for(let i=0, max=prev.carried_forward.length; i<max; i++){
        if(!prev.carried_forward[i]){
          continue;
        }
        let soln     = prev.carried_forward[i],
            length   = soln.length,
            new_soln = null;
        if(soln[1]<soln[0]){
          new_soln = soln.slice();
          new_soln[length-1] += 1;
          carried_forward.push(new_soln);
          total+=1;
        }
        if(soln[1]!==1){
          carried_forward.push([soln[1], 1]);
        }
        prev.carried_forward[i] = null;
      }
      prev = null;

      console.log(`There are ${total} solutions for ${n}`);
      return { total: total,
               carried_forward: carried_forward };
    }
  };

  console.log(`Solution is ${solutions_for_n(N).total}`);
})();
