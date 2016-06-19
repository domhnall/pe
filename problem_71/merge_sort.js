(function() {
  "use strict";

  let sort = function(arr){
    if(arr.length===1){ return arr; }
    let half = Math.floor(arr.length/2),
        first = arr.slice(0, half),
        second = arr.slice(half, arr.length);
    return merge(sort(first), sort(second));
  };

  let merge = function(arr_1, arr_2){
    let merged = [];
    while(true) {
      if(arr_1.length===0) {
        return merged.concat(arr_2);
      } else if(arr_2.length===0) {
        return merged.concat(arr_1);
      } else {
        if(arr_1[0].smallerThan(arr_2[0])){
          merged.push(arr_1.shift());
        }else{
          merged.push(arr_2.shift());
        }
      }
    }
  };

  let frac_sort = function(arr) {
    return arr.sort(function(a,b){
      if(a.smallerThan(b)) {
        return -1;
      } else if(b.smallerThan(a)) {
        return 1;
      } else {
        return 0;
      }
    });
  };
})();
