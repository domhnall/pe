(function(){
  "use strict";
  let fracs = [];
  let naive_cancel = function(num, denom) {
    let num_digits = (''+num).split(''),
        denom_digits = (''+denom).split(''),
        result = [];

    for(let i=0, n_len=num_digits.length; i<n_len; i++) {
      for(let j=0, d_len=denom_digits.length; j<d_len; j++) {
        if(num_digits[i]===denom_digits[j]) {
          num_digits.splice(i,1);
          denom_digits.splice(j,1);
          return [ parseInt(num_digits.join(''),10),
                   parseInt(denom_digits.join(''),10) ];
        }
      }
    }
    return;
  };

  let fractions_equal = function(frac_1, frac_2) {
    return (frac_1[0]/frac_2[0])===(frac_1[1]/frac_2[1]);
  };

  num_loop: for(let num=10; num<100; num++) {
    if(num%10===0){ continue num_loop; }
    denom_loop: for(let denom=(num+1); denom<100; denom++) {
      if(denom%10===0){ continue denom_loop; }
      let simplified = naive_cancel(num, denom);
      if(simplified) {
        if(fractions_equal(simplified, [num, denom])) {
          fracs.push(simplified);
        }
      }
    }
  }
  console.log(`Answer is: ${fracs}`);

}());
