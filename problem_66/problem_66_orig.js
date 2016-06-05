(function(){
  "use strict";
  require('../problem_21/array_utils.js').init();
  const LIMIT = 100;
  const SQUARES = Array.apply(null, {length: 33})
                       .map(Number.call, Number)
                       .map((el)=>{ return el*el; });


  let is_square = function(d){
    return SQUARES.contains(d);
  };

  let min_solution_for_d = function(d){
    console.log(`Finding solution for d = ${d}`);
    let x = 1,
        y = 1,
        test = 0,
        root_d = Math.sqrt(d);
    while(true){
      test = x*x - d*y*y;
      if(test<1){
        x+=1;
        y = Math.floor(x/root_d);
      }else if(test>1){
        y+=1;
      }else{
        return [x,y];
      }
    }
  };

  let max_d = 0,
      max_x = 0,
      results = [];
  for(let d=2; d<LIMIT; d++){
    if(is_square(d)){ continue; }
    results = min_solution_for_d(d);
    console.log(`Solution for d=${d}: (${results})`);
    if(results[0]>max_x){
      max_x = results[0];
      max_d = d;
    }
  }


  console.log(`Answer is ${max_d}`);
})();
