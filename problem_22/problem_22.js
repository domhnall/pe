fs = require('fs');
(function(){
  "use strict";

  let name_value = function(name){
    let letterA = "A".charCodeAt(0);
    return name.split('').reduce(function(prev,cur){
      return (prev+(cur.charCodeAt(0)-letterA+1));
    }, 0);
  };

  fs.readFile('./names.txt', 'utf8', function(err, data) {
    if(err){ console.log(err); }

    let ans = data.replace(/"/g,'')
                  .replace(/\s/g,'')
                  .split(',')
                  .map((name)=>{ return name.toUpperCase(); })
                  .sort()
                  .reduce(function(prev,cur,i){
                    return prev+((i+1)*name_value(cur));
                  }, 0);
    console.log(`Answer is ${ans}`);
  });
})();
