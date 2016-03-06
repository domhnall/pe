var COMBINATIONS = (function(c) {
  "use strict";

  const FACS = [];

  c.fac = function(n) {
    if(FACS[n]) { return FACS[n]; }
    if(n===0 || n===1){ return (FACS[n]=1); }
    return (FACS[n]=n*c.fac(n-1));
  };

  c.num_combinations = function(n,r){
    return c.fac(n)/(c.fac(r)*c.fac(n-r));
  };
  
  return c;
})(COMBINATIONS || {});

module.exports = COMBINATIONS;
