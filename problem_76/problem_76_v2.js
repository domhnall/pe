(function(){
  "use strict";

  const N = 100;
  const CACHED = {1: 1, 2: 1, 3: 2};

  const solutions_for_n = function solutions_for_n(n){
    console.log(`Calling for n = ${n}`);
    if(CACHED[n]){
      return CACHED[n];
    }else{
      let total = 2;
      for(let i=2; i<(n-1); i++){
        if(n===N){ console.log(`i = ${i}`) }
        total+=solutions_for_n(i);
        if(n===N){ console.log(`total = ${total} normal`); }
        if((i-1)>(n-i)){
          console.log(`i=${i} UNDER the line`);
          for(let j=2; (i-j)>=(n-i); j++){
            total -= solutions_for_n(j);
            if((i-j)<(n-i)){
              total -= 1;
            }
            if(n===N){ console.log(`total = ${total} after sub solutions for ${j}`) }
          }
        }else if((i-1)<(n-i)){
          total+=1;
        }
      }
      console.log(`Returning solutions for ${n} = ${total}`);
      return CACHED[n] = total;
    }
  };

  console.log(`Solution is ${solutions_for_n(N)}`);
  console.log(CACHED);
})();
