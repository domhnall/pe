(function(){
  "use strict";
  const OPTIONS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const OPTIONS_LEN = OPTIONS.length;
  const NUM_LEN = OPTIONS_LEN;
  const PERM_TARGET = 1000000;

  let fac = function(n){
    if(n===1){ return 1; }
    return n*fac(n-1);
  };

  let ans = [],
      cum_perms = 0,
      new_perms = 0,
      options = OPTIONS;
  slots: for(let i=0; i<NUM_LEN; i++) {
    digits: for(let j=0; j<OPTIONS_LEN; j++) {
      ans[i] = options[j];
      new_perms = cum_perms+fac(NUM_LEN-(i+1));
      if(new_perms>=PERM_TARGET){
        options.splice(j,1);
        if(new_perms===PERM_TARGET){
          ans = ans.concat(options.reverse());
          break slots;
        }else{
          break digits;
        }
      }else{
        cum_perms=new_perms;
      }
    }
  }

  console.log(`Desired permutation: ${ans.join('')}`);
})();
