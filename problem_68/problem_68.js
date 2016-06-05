(function(){
  "use strict";
  const array_to_n = function(n){
    return Array.apply(null, {length: n}).map(Number.call, Number).map((d)=> d+1);
  };

  const N = 5,
        DIGITS = array_to_n(2*N).join('');

  const get_total = function(inners){
    return (inners.reduce((p,c)=> p+c, 0)/N) + (2*N+1);
  };

  const is_solution = function(result){
    return result.slice().sort((a,b)=>{ return b<a; }).join('')===DIGITS;
  };

  const cyclically_permutate = function(arr, index){
    return arr.slice(index).concat(arr.slice(0,index));
  };

  const get_solution = function(inners){
    let result = [],
        total = get_total(inners);
    for(let i=0; i<N; i++){
      result[2*i] = inners[i];
      result[2*i+1] = total-inners[i]-inners[(i+1)%N];
    }
    return result;
  };

  let solutions = [];
  i_loop: for(let i=1; i<10; i++){
    j_loop: for(let j=1; j<10; j++){
      if(j===i){ continue j_loop; }
      k_loop: for(let k=1; k<10; k++){
        if(k===i || k===j){ continue k_loop; }
        l_loop: for(let l=1; l<10; l++) {
          if(l===i || l===j || l===k){ continue l_loop; }
          m_loop: for(let m=1; m<10; m++) {
            if(m===i || m===j || m===k || m===l){ continue m_loop; }
            let result     = [],
                sum_inners = [i,j,k,l,m].reduce((p,c)=> p+c, 0),
                test       = [];
            if(sum_inners%N!==0){ continue m_loop; }

            test = get_solution([i,j,k,l,m]);

            if(is_solution(test)){
              console.log(`Got solution ${test}`);
              let sol = [ ''+test[1]+test[0]+test[2],
                          ''+test[3]+test[2]+test[4],
                          ''+test[5]+test[4]+test[6],
                          ''+test[7]+test[6]+test[8],
                          ''+test[9]+test[8]+test[0] ].map((d)=> parseInt(d,10));
              
              solutions.push(cyclically_permutate(sol, sol.indexOf(Math.min(...sol))).join(''));
            }
          }
        }
      }
    }
  }

  console.log(solutions);
  console.log(`Solution ${Math.max.apply(null, solutions.map((s)=> parseInt(s,10)))}`);
})();
