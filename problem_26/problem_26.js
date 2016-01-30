(function(){
  "use strict";
  const LIMIT = 1000;

  let ans = null,
      max_terms = 0;

  let recurring_cycle_terms = function(n){
    let remainders = [],
        num = 10;
    do {
      num=(num%n)*10;
      if(num===0) {
        return 0;
      } else if(remainders.indexOf(num)!==-1) {
        return remainders.indexOf(num)+1;
      } else {
        remainders.unshift(num);
      }
    }while(true);
  };

  for(let i=1; i<LIMIT; i++) {
    if(recurring_cycle_terms(i)>max_terms){
      max_terms = recurring_cycle_terms(i);
      ans = i;
    }
  }

  console.log(`Answer ${ans}`);
})();
