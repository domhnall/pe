(function(){
  "use strict";
  const LOOP_LIMIT = 1001;
  let total = 1,
      term = 1;

  for(let loop_n=3; loop_n<=LOOP_LIMIT; loop_n = loop_n+2) {
    let side_step = loop_n-1;
    for(let side=0; side<4; side++) {
      term+=side_step;
      total+=term;
    }
  }
  console.log(`Number spiral diagonal ${total}`);
})();
