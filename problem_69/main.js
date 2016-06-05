var cp = require('child_process');

var limit = 1000000;

var children =[],
    max_totient = 0,
    max_n       = 0;

var handle_results_from_child = function(m){
  // Receive results from child process
  if(m[1]>max_totient){
    max_totient = m[1];
    max_n = m[0];
    console.log('Max n: ' + max_n);
  }
  console.log('Processed ' + m[0] + ' totient is ' + m[1]);
  if(m[0]===(limit-1)){
    console.log('MAX TOTIENT: '+max_totient);
    console.log('MAX N: '+max_n);
  }
};
for(var i=0; i<4; i++){
  var child = children[i] = cp.fork(__dirname + '/worker');
  child.on('message', handle_results_from_child);
}

// Send child process some work
for(var i=0; i<limit; i++) {
  children[i%4].send(i);
}
