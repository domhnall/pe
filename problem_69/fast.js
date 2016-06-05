var PRIME = require('../problem_7/prime');
var p = 2,
    ans = 2;
while(p=PRIME.next_prime(p)){
  if((ans*p)<1000000){
    ans = ans*p;
  }else{
    break;
  }
};
console.log(`Answer is ${ans}`);
