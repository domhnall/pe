(function(){
  "use strict";
  const N = 10000;
  let odd_count = 0;

  let continued_frac = function(num){
    let components = [];
    let a  = 1,
        as = [a],
        b  = Math.floor(Math.sqrt(num)),
        bs = [b];
    if(b*b===num){ return []; }
    repeat: while(true){
      let a_prime = (num-b*b)/a,
          x = Math.floor((Math.sqrt(num)+b)/a_prime),
          b_prime = x*((num-b*b)/a)-b;
      if(components[0] && as[0]===a && bs[0]===b){
        break repeat;
      } else {
        components.push(x);
      }
      as.push(a=a_prime);
      bs.push(b=b_prime);
    }
    return components;
  };

  for(let i=2; i<=N; i++) {
    let frac = continued_frac(i);
    if(continued_frac(i).length%2===1){
      odd_count++;
    }
  }

  console.log(`Answer ${odd_count}`);
}());
