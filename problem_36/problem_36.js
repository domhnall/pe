(function(){
  "use strict";

  const LIMIT = 1000000;

  let is_palindrome = function(num){
    return (''+num).split('').reverse().join('')===(''+num);
  };

  let base_2 = function(num) {
    return Number(num).toString(2);
  };

  let double_palindromes = [];
  for(let i=1; i<LIMIT; i++) {
    if(is_palindrome(i) && is_palindrome(base_2(i))) {
      double_palindromes.push(i);
    }
  }

  console.log(`Answer is ${double_palindromes.reduce((p,c)=>{return p+c},0)}`);
}());
