(function(){
  "use strict";
  require('../problem_21/array_utils.js').init();

  const MIN = 999, MAX = 10000, SET_SIZE = 6;

  let get_polygonals = function(generator){
    let i    = 0,
        term = 0,
        nums = [];
    main: while(true){
      let term = generator(++i);
      if(term>MAX){ break main; }
      if(term>MIN && term<MAX){
        nums.push(term);
      }
    }
    return nums;
  };

  const GENERATORS = [ (i)=>{ return i*(i+1)/2; },
                       (i)=>{ return i*i; },
                       (i)=>{ return i*(3*i-1)/2; },
                       (i)=>{ return i*(2*i-1); },
                       (i)=>{ return i*(5*i-3)/2; },
                       (i)=>{ return i*(3*i-2); } ].slice(0,SET_SIZE);

  const POLYGONAL_NUMBERS = GENERATORS.map((g)=>{ return get_polygonals(g); });

  let are_polygonals = function(solution){
    let test       = null,
        n          = null,
        polygonals = POLYGONAL_NUMBERS.slice();
    for(let i=0; i<SET_SIZE; i++) {
      test = ''+solution[i]+solution[(i+1)%SET_SIZE];
      if((n=polygonal_order(test, polygonals))!==-1) {
        polygonals[n] = [];
      }else{
        return false;
      }
    }
    return true;
  };

  let polygonal_order = function(num, polygonals){
    num = parseInt(num, 10);
    for(let i=0, len=polygonals.length; i<len; i++) {
      if(polygonals[i].contains(num)) {
        return i;
      }
    }
    return -1;
  };


  let solution   = [];
  loop_i: for(let i=10; i<100; i++){
    console.log("i  " + i);
    loop_j: for(let j=10; j<100; j++) {
      if(polygonal_order(''+i+j,POLYGONAL_NUMBERS)===-1){ continue loop_j; }
      loop_k: for(let k=10; k<100; k++) {
        if(polygonal_order(''+j+k,POLYGONAL_NUMBERS)===-1){ continue loop_k; }
        loop_l: for(let l=10; l<100; l++) {
          if(polygonal_order(''+k+l,POLYGONAL_NUMBERS)===-1){ continue loop_l; }
          loop_m: for(let m=10; m<100; m++) {
            if(polygonal_order(''+l+m,POLYGONAL_NUMBERS)===-1){ continue loop_m; }
            loop_n: for(let n=10; n<100; n++) {
              if(polygonal_order(''+m+n,POLYGONAL_NUMBERS)===-1){ continue loop_n; }
              solution = [i,j,k,l,m,n];
              if(are_polygonals(solution)){
                break loop_i;
              }
            }
          }
        }
      }
    }
  }

  console.log(solution);
  console.log(solution.reduce((memo,val,idx,arr)=>{ return memo + parseInt(''+val+arr[(idx+1)%arr.length]); }, 0));

}());
