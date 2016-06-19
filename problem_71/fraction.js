var prime = require('../problem_7/prime');
var FRACTION = (function(f) {
  "use strict";

  var Fraction = function(num, denom){
    this.num = num;
    this.denom = denom;
  };

  Fraction.prototype.smallerThan = function(other){
    return this.num*other.denom < other.num*this.denom;
  };

  Fraction.prototype.toString = function() {
    return `${this.num}/${this.denom}`;
  };


  Fraction.prototype.reduce = function() {
    var num = prime.prime_factorization(this.num),
        fac_num = num.slice(),
        denom = prime.prime_factorization(this.denom),
        fac_denom = denom.slice();
    for(var i=0; i<fac_num.length; i++) {
      var index = fac_denom.findIndex((el)=>{ return el===fac_num[i]; });
      if(index!==-1){
        fac_num.splice(i,1);
        fac_denom.splice(index,1);
        i--;
      }
    }
    return new Fraction( fac_num.reduce((p,i)=>{ return p*i; }, 1),
                         fac_denom.reduce((p,i)=>{ return p*i; }, 1));
  };


  return Fraction;
})(FRACTION || {});

module.exports = FRACTION;
