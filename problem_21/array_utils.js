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
    };

    Array.prototype.equals = function(array){
      if(!array){ return false; }
      if(this.length!==array.length){ return false; }
      for(let i=0, len=this.length; i<len; i++){
        if(this[i] instanceof Array && array[i] instanceof Array) {
          if(!this[i].equals(array[i])){
            return false;
          }
        }
        if(this[i]!=array[i]) {
          return false;
        }
      }
      return true;
    };
  };

  return ar;
}(ARRAY_UTILS || {}));

module.exports = ARRAY_UTILS;
