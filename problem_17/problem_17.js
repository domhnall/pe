(function() {
  "use strict";

  const SUM_TO = 1000;
  const HUNDRED = 7;
  const THOUSAND = 8;
  const AND= 3;
  const DIGITS = [0,3,3,5,4,4,3,5,5,4,3,6,6,8,8,7,7,9,8,8];
  const TENS = [0,3,6,6,5,5,5,7,6,6];

  let get_thousands = function(a) {
    let thousands = Math.floor(a/1000);
    if(thousands===0){
      return 0;
    }else{
      let use_and = (a%1000!==0);
      return (DIGITS[thousands] + THOUSAND + (use_and ? AND : 0));
    }
  };

  let get_hundreds = function(a) {
    let hundreds = Math.floor((a%1000)/100);
    if(hundreds===0){
      return 0;
    }else{
      let use_and = (a%100!==0);
      return (DIGITS[hundreds] + HUNDRED + (use_and ? AND : 0));
    }
  };

  let get_tens = function(a) {
    let tens = Math.floor((a%100)/10);
    if(tens<2){
      return 0;
    }else{
      return TENS[Math.floor(tens)];
    }
  };

  let get_digits = function(a){
    let digits = a%100;
    if(digits<20){
      return DIGITS[digits];
    }else{
      return DIGITS[digits%10];
    }
  };

  let get_word_length = function(i){
    return get_thousands(i) + get_hundreds(i) + get_tens(i) + get_digits(i);
  };
  
  let sum = 0;
  for(let i=1; i<=SUM_TO; i++) {
    sum+=get_word_length(i);
  }

  console.log(`Answer is ${sum}`);
})();
