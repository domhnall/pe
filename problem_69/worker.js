var are_coprime = require('./coprime').are_coprime;

var totient = function(num){
  var count = 0;
  for(var i=1; i<num; i++){
    if(are_coprime(i,num)){
      count++;
    }
  }
  return count;
};

var totient_ratio = function(num){
  return num/totient(num);
};

process.on('message', function(num) {
  // Pass results back to parent process
  process.send([num,totient_ratio(num)]);
});
