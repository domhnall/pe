var NUMBER_ARRAYS = (function(na){
  "use strict";

  let array_of_n = function(n,val){
    return Array.apply(null,Array(n)).map((el)=>{ return (val || 0); });
  };

  na.array_multiply = function(a,b){
    let a_rev   = a.slice().reverse(),
        b_rev   = b.slice().reverse(),
        ans     = [];
    for(let i=0, a_len=a_rev.length; i<a_len; i++) {
      let row_sum = array_of_n(i),
          carried = 0;
      for(let j=0, b_len=b_rev.length; j<b_len; j++) {
        row_sum.push((a_rev[i]*b_rev[j]+carried)%10);
        carried = Math.floor((a_rev[i]*b_rev[j]+carried)/10);
      }
      if(carried>0){ row_sum.push(carried); }
      ans=na.array_sum(ans, row_sum.reverse());
    }
    return ans;
  };

  na.array_sum = function(a,b) {
    let a_rev   = a.slice().reverse(),
        b_rev   = b.slice().reverse(),
        result  = [],
        carried = 0;

    if(a_rev.length<b_rev.length){
      a_rev = a_rev.concat(array_of_n(b_rev.length-a_rev.length));
    }else if(b_rev.length<a_rev.length){
      b_rev = b_rev.concat(array_of_n(a_rev.length-b_rev.length));
    }

    for(let i=0, a_len=a_rev.length; i<a_len; i++) {
      result[i] = (a_rev[i]+b_rev[i]+carried)%10;
      carried = Math.floor((a_rev[i]+b_rev[i]+carried)/10);
    }
    if(carried>0){ result.push(carried); }

    return result.reverse();
  };

  na.array_difference = function(a,b){
    let a_rev   = a.slice().reverse(),
        b_rev   = b.slice().reverse(),
        result  = [],
        carried = 0;

    if(a_rev.length<b_rev.length){
      a_rev = a_rev.concat(array_of_n(b_rev.length-a_rev.length));
    }else if(b_rev.length<a_rev.length){
      b_rev = b_rev.concat(array_of_n(a_rev.length-b_rev.length));
    }

    for(let i=0, a_len=a_rev.length; i<a_len; i++) {
      result[i] = (a_rev[i]-b_rev[i]-carried);
      carried = 0;
      if(result[i]<0){
        result[i]+=10;
        carried = 1;
      }
    }
    if(carried>0){ result[a_rev.length-1]-=10; }

    return result.reverse();
  };

  na.array_power = function(a,b){
    let ans = a.slice();
    for(let i=1; i<b; i++) {
      ans = na.array_multiply(a,ans);
    }

    return ans;
  };

  na.num_to_array = function(num){
    return (''+num).split('').map((d)=>{return parseInt(d,10);});
  };

  return na;
}(NUMBER_ARRAYS || {}));

module.exports = NUMBER_ARRAYS;
