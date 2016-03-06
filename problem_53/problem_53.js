(function(){
  "use strict";
  const num_combinations = require('../problem_53/combinations').num_combinations;
  const LIMIT = 100;
  const THRESHOLD = 1000000;

  let count = 0;
  for(let n=5; n<=LIMIT; n++) {
    for(let r=1; r<n; r++) {
      if(num_combinations(n,r)>THRESHOLD){ count++; }
    }
  }
  console.log(`Answer is ${count}`);
}());
