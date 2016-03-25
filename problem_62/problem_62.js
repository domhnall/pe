(function(){
  "use strict";
  require('../problem_21/array_utils').init();
  const START = 300,
        NUM_PERMS = 5,
        CUBES = {"1": {"1": 1, "2": 8},
                 "2": {"3": 27, "4": 64}};

  let cubes_of_length = function(len){
    if(CUBES[len]){ return CUBES[len]; }
    let i = Object.keys(CUBES[len-1]).pop();
    CUBES[len] = {};
    loop: while(true){
      i++;
      let cube = (''+Math.pow(i,3));
      if(cube.length==len){
        CUBES[len][i] = cube;
      }else{
        break loop;
      }
    }
    return CUBES[len];
  };

  let obj_vals = function(obj){
    return Object.keys(obj).map((k)=>{ return obj[k]; });
  };

  let are_perms = function(str1, str2){
    return str1.split('').sort().join('')===str2.split('').sort().join('');
  };

  let find_perms = function(arr, num){
    let perms = [],
        len   = arr.length;
    if(perms.length===num){
      return perms;
    }
    main: for(let i=0; i<len; i++){
      perms = [arr[i]];
      for(let j=i+1; j<len; j++) {
        if(are_perms(arr[i],arr[j])){
          perms.push(arr[j]);
          if(perms.length===num){ break main; }
        }
      }
    }
    return perms;
  };

  let len = 3,
      cube_strings = [],
      perms;
  main: while(true){
    cube_strings = obj_vals(cubes_of_length(len));
    perms=find_perms(cube_strings,NUM_PERMS);
    if(perms.length===NUM_PERMS){
      break main;
    }
    len++;
  }

  console.log(`Answer ${perms[0]}`);
}());
