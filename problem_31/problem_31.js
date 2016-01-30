(function(){
  "use strict";

  const COINS = [200, 100, 50, 20, 10, 5, 2, 1];
  const TARGET = 200;

  let combinations_to_value = function(val, coins) {
    let combinations = 0;
    for(let i=0, len=coins.length; i<len; i++) {
      let coin_val = coins[i],
          max = Math.floor(val/coin_val);
      inner: for(let j=max; j>0; j--) {
        let remainder = val-(j*coin_val);
        if(remainder===0){
          combinations+=1;
        }else{
          combinations+=combinations_to_value(remainder, coins.slice(coins.indexOf(coin_val)+1));
        }
      }
    }
    return combinations;
  };

  console.log(`Answer for ${TARGET}: ${combinations_to_value(TARGET, COINS)}`);
}());
