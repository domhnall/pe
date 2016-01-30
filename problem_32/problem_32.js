(function(){
  "use strict";
  require('../problem_21/array_utils').init();
  const DIGITS = "123456789";

  let is_pandigital = function(num) {
    return (''+num).split('').sort().join('')===DIGITS;
  };

  let products = [];

  // m1, m2 and p must have a total of 9 digits exactly
  // A two-digit by two-digit multiplication gives a max of 99*99=9801
  // This is a total of 8 digits (not enough)
  //
  // A two-digit by four-digit product gives a minimum of 10*1000=10000
  // This is a total of 11 digits (too many)
  //
  // So the products we are looking for include two-digit by
  // three-digit products
  // The smallest of these 10*100=1000 (9 digits)
  // The largest of these 99*999=98901 (10 digits)
  //
  // Similarly a one-digit by three-digit product will yield a product
  // that is a maximum of four digits (9*999=8991), givig a total of
  // only 8 digits.
  // However a one-digit by four-digit product can yield a product of 
  // four digits so we should look in this space for qualifying products.
  //
  m_1: for(let m1=1; m1<100; m1++) {
    m_2: for(let m2=100; m2<10000; m2++) {
      let prod = m1*m2;
      if(is_pandigital(''+m1+m2+prod)){
        console.log(`Found a pandigital: ${m1} x ${m2} = ${prod}`);
        products.push(prod);
      }
    }
  }
  console.log(`Did the loop now need to uniq`);
  console.log(`Answer: ${products.unique().reduce((c,p)=>{ return c+p; },0)}`);
}());
