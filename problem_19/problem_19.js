(function(){
  "use strict";
  const MONTH_DAYS = [31,28,31,30,31,30,31,31,30,31,30,31];
  const LEAP_MONTH_DAYS = [31,29,31,30,31,30,31,31,30,31,30,31];
  
  let is_leap_year = function(i) {
    return i%400===0 || (i%4===0 && i%100!==0);
  };

  let ans = 0;
  let weekday = 2;
  for(let i=1901; i<2001; i++) {
    let months = is_leap_year(i) ? LEAP_MONTH_DAYS : MONTH_DAYS;
    for(let j=0; j<12; j++) {
      weekday = (weekday + months[j])%7;
      if(weekday===0){ ans++; }
    }
  }

  console.log(`Answer: ${ans}`);
})();
