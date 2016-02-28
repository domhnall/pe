(function(){
  "use strict";
  require('../problem_21/array_utils').init();
  const MULTIPLES = [2,3,4,5,6];

  let test_multiple = function(num, multiple) {
    return (''+num*multiple).split('').sort().equals((''+num).split('').sort());
  };

  let test_multiples = function(num, multiples) {
    return multiples.reduce((p,c)=>{ return p && test_multiple(num,c); }, true);
  };

  for(let i=1; ; i++) {
    if(test_multiples(i, MULTIPLES)) {
      console.log(i);
      break;
    }
  }
})();
