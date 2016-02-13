(function(){
  "use strict";
  let fs = require('fs');
  require('../problem_21/array_utils').init();

  const BASE = ("a".charCodeAt(0)-1),
        TRI_NUMS = [1,3,6,10,15,21,28,36,45,55];

  let is_triangle_number = function(num) {
    let last_index=TRI_NUMS.length-1,
        current_max = TRI_NUMS[last_index];
    while(num>current_max){
      last_index++;
      current_max = TRI_NUMS[last_index] = (last_index+1)*(last_index+2)/2;
    }
    return TRI_NUMS.contains(num);
  };

  let is_triangular = function(word) {
    return is_triangle_number(to_integers(word).reduce((p,c)=>{ return p+c; }));
  };

  let to_integers = function(word) {
    return word.toLowerCase()
               .split('')
               .map((c)=>{ return c.charCodeAt(0)-BASE; });
  };

  fs.readFile('./p042_words.txt', 'utf8', function(err, data){
    if(err){ return console.log(err); }

    let words = data.split('","'),
        triangular_words_count = 0,
        len = words.length;
    words[0] = words[0].substr(1,words[0].length);
    words[len-1] = words[len-1].substr(0,words[len-1].length-1);
    for(let i=0; i<len; i++) {
      if(is_triangular(words[i])){ triangular_words_count++; }
    }
    console.log(`Answer ${triangular_words_count}`);
  });
}());
