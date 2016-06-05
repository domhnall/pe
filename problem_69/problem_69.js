(function(){
  "use strict";
  const LIMIT = 50000;
  const are_coprime = require('./coprime').are_coprime;

  const totient = function(num){
    let count = 0;
    for(let i=1; i<num; i++){
      if(are_coprime(i,num)){
        count++;
      }
    }
    return count;
  };

  const totient_ratio = function(num){
    return num/totient(num);
  };

  let cur = 0,
      max = 0,
      max_totient = 0;
  for(let i=2; i<=LIMIT; i++) {
    cur = totient_ratio(i);
    console.log(`Totient ratio for ${i}: ${cur}`);
    if(cur>max_totient){
      max = i;
      max_totient = cur;
    }
  }

  console.log(`Answer is ${max}`);
})();
