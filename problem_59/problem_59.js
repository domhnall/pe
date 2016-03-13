(function(){
  "use strict";
  const fs = require('fs'),
        permutations = require('../problem_41/permutations').permutations,
        CHARS = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
        //CHAR_PERMS = permutations(CHARS);


  let combinations = function combinations(arr, size){
    if(size===1){ return arr.map((el)=>{ return [el]; }); }
    let combs = [];
    for(let i=0, len=(arr.length-size); i<len; i++){
      combs = combs.concat(combinations(arr.slice(i+1),size-1).map((a)=>{ a.unshift(arr[i]); return a; }));
    }
    return combs;
  };

  let ascii_to_string = function(arr){
    return arr.map((int)=>{ return String.fromCharCode(int); }).join('');
  };

  let xor_map = function(nums, key) {
    return nums.map((n,i)=>{ return n^key[i%3]; });
  };

  let decrypt_message = function(nums, key){
    return ascii_to_string(xor_map(nums,key));
  };

  let find_key = function(){
    let key_combinations = combinations(CHARS,3);
    fs.readFile('./p059_cipher.txt', 'utf8', function(err, data){
      if(err){ return console.log(err); }
      let nums = data.split(',').map((d)=>{ return parseInt(d,10); });
      for(let i=0, i_len=key_combinations.length; i<i_len; i++) {
        let perms = permutations(key_combinations[i]);
        for(let j=0, j_len=perms.length; j<j_len; j++) {
          let key = perms[j].map((c)=>{ return c.charCodeAt(0); });
          console.log(`The key: ${perms[j]}`);
          console.log(decrypt_message(nums, key));
        }
      }
    });
  };

  // Found key to be
  let get_answer_for_password = function(password){
    fs.readFile('./p059_cipher.txt', 'utf8', function(err, data){
      if(err){ return console.log(err); }
      let nums = data.split(',').map((d)=>{ return parseInt(d,10); }),
          key = password.map((c)=>{ return c.charCodeAt(0); });
      console.log(key);
      console.log(nums);
      console.log(xor_map(nums,key).reduce((p,c)=>{ return p+c; },0));
    });
  };

  get_answer_for_password(['g','o','d']);
}());
