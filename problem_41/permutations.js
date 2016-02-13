var PERMUTATIONS = (function(p){
  "use strict";
  p.permutations = function permutations(arr) {
    if(arr.length===1){
      return [arr];
    }
    let perms = [], temp = [];
    for(let i=0, len=arr.length; i<len; i++) {
      let copy = arr.slice(),
          item = copy.splice(i,1)[0];
      perms = perms.concat(permutations(copy).map((i)=>{ i.unshift(item); return i;}));
    } 
    return perms;
  };

  return p;
}(PERMUTATIONS || {}));

module.exports = PERMUTATIONS;
