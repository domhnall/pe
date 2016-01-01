(function() {
  "use strict";
  const SUM = 1000;
  let ans = null;

  let is_pythagorean_triplet = function(a, b, c) {
    return (a*a + b*b)===c*c;
  };

  outer: for(let a=3, a_lim=SUM; a<=SUM; a++) {
    for(let b=(a+1), b_lim=(SUM-a); b<=b_lim; b++) {
      for(let c=(b+1), c_lim=(SUM-a-b); c<=c_lim; c++) {
        if(is_pythagorean_triplet(a,b,c)) {
          console.log(`Found a triplet: ${a}, ${b}, ${c}`);
          if((a+b+c)===SUM) {
            console.log(`This is the answer ...`);
            ans = a*b*c;
            break outer;
          }
        }
      }
    }
  }

  console.log(`Pythagorean triplet product: ${ans}`);
}());
