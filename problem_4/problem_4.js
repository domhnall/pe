(function(){
  "use strict";

  let get_digits = function(num) {
    return ('' + num).split('');
  };

  let is_palindrome = function(num) {
    let digits = get_digits(num);
    do{
      if(digits.pop()!==digits.shift()){
        return false;
      }
    } while(digits.length>1);
    return true;
  };

  let get_answer = function() {
    let max = 0,
        product = 0;
    outer: for(let i=999; i>99; i--) {
      inner: for(let j=999; j>99; j--) {
        product = i*j;
        if(product<max) {
          break inner;
        }
        if(is_palindrome(product)) {
          max = product;
          break inner;
        }
      }
    }
    return max;
  };

  console.log(`Answer: ${get_answer()}`);
})();
