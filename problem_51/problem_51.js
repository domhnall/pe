(function(){
  "use strict";
  require('../problem_21/array_utils').init();
  const next_prime = require('../problem_7/prime').next_prime;
  const LIMIT = 8;


  let get_all_primes_in_range = function(min,max) {
    let next = min,
        primes = [];
    while(next<max) {
      primes.push(next);
      next = next_prime(next);
    }
    return primes;
  };

  // Parameters:
  // * arr: Array wherein we are looking for matches
  // * n: Multiplicity of the matches we are looking for
  // 
  // Should return a hash of arrays
  // Each element should have a key of the digit for
  // which the n-tuple match was found and each array
  // should return the indices for all matching digits.
  //
  let matching_digits = function(arr, n) {
    let matching = {};
    for(let i=0, len=arr.length; i<len; i++) {
      let key = parseInt(arr[i],10);
      if(matching[key]){
        matching[key].push(i);
      }else{
        matching[key] = [i];
      }
    }
    return Object.keys(matching).reduce((p,c)=>{ if(matching[c].length===n){ p[c]=matching[c] }; return p; }, {});
  };

  outer: for(let exp=5; exp<7; exp++) {
    let min              = Math.pow(10,exp-1),
        max              = Math.pow(10,exp),
        primes           = get_all_primes_in_range(min, max);

    console.log(`Got primes for exp = ${exp}`);
    for(let i=0, len=primes.length; i<len; i++) {
      let prime_digits = (''+primes[i]).split('');

      for(let j=2; j<=exp; j++) {
        let indices_hash = matching_digits(prime_digits,j),
            digit_keys   = Object.keys(indices_hash);
        match: for(let k=0, len=digit_keys.length; k<len; k++) {
          let key = parseInt(digit_keys[k],10),
              running_count = 1;
          for(let inc_digit=key+1; inc_digit<=9; inc_digit++) {
            let test = indices_hash[''+key].reduce((p,c)=>{ p.splice(c,1,inc_digit); return p;}, prime_digits.slice()).join('');

            if(primes.contains(parseInt(test,10))){
              running_count++;
              if(running_count===LIMIT){
                console.log(`Answer is ${primes[i]}`);
                break outer;
              }
            }
          }
        }
      }
    }
  }
}());
