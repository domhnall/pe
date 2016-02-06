(function(){
  "use strict";
  const DIGITS = "123456789";

  let is_pandigital = function(num) {
    return (''+num).split('').sort().join('')===DIGITS;
  };

  let pandigitals = [];

  for(let int=0; int<10000; int++) {
    let str = '',
        n   = 0;
    do {
      n++;
      str += n*int;
    } while(str.length<9);

    if(str.length===9 && is_pandigital(str)) {
      console.log(`Found pandigital ${str} for ${int} and n=${n}`);
      pandigitals.push(parseInt(str,10));
    }
  }
  console.log(`Answer ${Math.max.apply(null, pandigitals)}`);
}());
