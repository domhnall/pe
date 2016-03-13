(function(){
  "use strict";
  const array_sum = require('../problem_56/number_arrays').array_sum;
  const LIMIT = 1000;

  let scale_array = function(arr, int){
    return arr.map((d)=>{ return int*d; });
  };

  const Fraction = function(num, denom){
    this.num   = (''+num).split('').map((d)=>{ return parseInt(d,10); });
    this.denom = (''+denom).split('').map((d)=>{ return parseInt(d,10); });
  };

  Fraction.prototype.invert = function(){
    let old_num = this.num;
    this.num   = this.denom;
    this.denom = old_num;
    return this;
  };

  Fraction.prototype.is_qualifying = function(){
    return this.num.length > this.denom.length;
  };

  Fraction.prototype.plus = function(int) {
    this.num = array_sum(this.num,scale_array(this.denom,int));
    return this;
  };

  Fraction.prototype.toString = function() {
    return `${this.num.join('')}/${this.denom.join('')}`;
  };

  let iteration_n = function(n){
    let ans = new Fraction(1,2);
    while(--n>0){
      ans = ans.plus(2).invert();
    }
    return ans.plus(1);
  };

  let count = 0;
  for(let i=1; i<=LIMIT; i++){
    if(iteration_n(i).is_qualifying()){
      console.log(`${i}`);
      count++;
    }
  }
  console.log(`Answer is ${count}`);
}());
