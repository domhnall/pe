(function() {
  "use strict";

  let indexes = [1, 10, 100, 1000, 10000, 100000, 1000000];

  let digit_at_index = function(n) {
    let n_left = n;
    for(let power=0;; power++){
      console.log(`n_left ${n_left}`);
      let term_length = power+1,
          total_length = 9*term_length*Math.pow(10,power);
      if(n_left>total_length){
        n_left-=total_length;
        continue;
      }else{
        let num_index = Math.floor((n_left-1)/term_length),
            num = Math.pow(10,power)+num_index;

        n_left -= num_index*term_length;
        console.log(`n_left ${n_left}`);
        return parseInt((''+num).split('')[n_left-1],10);
      }
    }
  };
  let digits = indexes.map((i)=>{ return digit_at_index(i); });
  console.log(`Answer is ${digits.reduce((p,c)=>{ return p*c; }, 1)}`);
}());
