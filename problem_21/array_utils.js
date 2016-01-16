var ARRAY_UTILS = (function(ar){
  "use strict";

  ar.init = function(){
    Array.prototype.contains = function(v){
      return this.indexOf(v)!==-1;
    };

    Array.prototype.unique = function(){
      var arr = [];
      for(let i=0, len=this.length; i<len; i++){
        if(!arr.contains(this[i])){
          arr.push(this[i]);
        }
      }
      return arr;
    }
  };

  return ar;
}(ARRAY_UTILS || {}));

module.exports = ARRAY_UTILS;
