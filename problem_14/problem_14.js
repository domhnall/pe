(function(){
  "use strict";

  const MAX = 1000000;

  let max_length = 0,
      max_length_ans = null;
  for(let start = 2; start<MAX; start++) {
    let term = start,
        length = 0;

    do {
      if(term%2===0) {
        term = term/2;
      } else {
        term = 3*term+1;
      }
      length++;
    } while(term>1);
    if(length>max_length){
      max_length_ans=start;
      max_length=length;
    }
  }

  console.log(`Answer is ${max_length_ans}, it leads to a chain of ${max_length} terms`);
}());
