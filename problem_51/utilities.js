(function(u){
  "use strict";

  u.zero_array = function(len) {
    return Array.apply(null, Array(len)).map(Number.prototype.valueOf,0);
  };

  u.dec2bin = function(dec) {
    return (dec>>>0).toString(2);
  };

  u.array_to_n = function(n) {
    return Array.apply(null, {length: Math.pow(2,n)}).map(Number.call, Number).slice(2);
  };

  return u;
})(UTILITIES || {});

module.exports = UTILITIES;
