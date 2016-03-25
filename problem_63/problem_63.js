(function(){
  "use strict";
  const num_to_array = require('../problem_56/number_arrays').num_to_array;
  const array_power = require('../problem_56/number_arrays').array_power;

  let count = 0,
      power = null;
  for(let int=1; int<10; int++){
    power = 0;
    pow: while(true){
      power++;
      let num        = array_power((''+int).split(''), power).join(''),
          num_length = num.length;
      if(power>num_length){
        break pow;
      }else if(power===num_length){
        count++;
      }
    }
  }

  console.log(`Answer ${count}`);
}());
