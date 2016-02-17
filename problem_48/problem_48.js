(function(){
  "use strict";

  const DIGIT_LENGTH = 10;
  const LIMIT = 1000;

  let truncate_digits = function(num, length){
    if(num<Math.pow(10,DIGIT_LENGTH)){ return num; }
    let digit_arr = (''+num).split('');
    return parseInt(digit_arr.slice(digit_arr.length-length).join(''),10);
  };

  let digits_for_power = function(n,m){
    let ans = 1;
    for(let i=m; i>0; i--){
      ans = truncate_digits(ans*n, DIGIT_LENGTH);
    }
    return ans;
  };

  let sum = 0;
  for(let i=1; i<=LIMIT; i++) {
    sum = truncate_digits(sum+digits_for_power(i,i), DIGIT_LENGTH);
  }

  console.log(`Answer is ${sum}`);
}());
