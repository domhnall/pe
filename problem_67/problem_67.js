fs = require('fs');
(function() {
  "use strict";

  let PARSED = [],
      MAX_VALUES,
      CUM_MAX_VALUES,
      PARSED_TEST = [ [3], [7, 4], [2, 4, 6], [8, 5, 9, 3]],
      CACHED_MAXES = [];
            
  let get_max_for_sub = function(i,j){
    if(CACHED_MAXES[i]){
      if(CACHED_MAXES[i][j]){
        return CACHED_MAXES[i][j];
      }
    }else{
      CACHED_MAXES[i] = [];
    }

    if(i===(PARSED.length-1)) {
      return PARSED[i][j];
    }
    let max_left = PARSED[i][j] + get_max_for_sub(i+1, j);
    let max_right = PARSED[i][j] + get_max_for_sub(i+1, j+1);
    return (CACHED_MAXES[i][j] = (max_left>max_right) ? max_left : max_right);
  };

  fs.readFile('./p067_triangle.txt', 'utf8', function(err, data) {
    if(err){ console.log(err); }
    PARSED = data.split("\n")
                 .map((line)=>{
                   return line.split(" ").map((d)=>{ return parseInt(d,10); });
                 });
    PARSED.pop();
    console.log(`Answer is ${get_max_for_sub(0,0)}`);
  });
})();
