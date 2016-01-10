(function() {
  "use strict";

  const TRIANGLE = ["75",
                    "95 64",
                    "17 47 82",
                    "18 35 87 10",
                    "20 04 82 47 65",
                    "19 01 23 75 03 34",
                    "88 02 77 73 07 63 67",
                    "99 65 04 28 06 16 70 92",
                    "41 41 26 56 83 40 80 70 33",
                    "41 48 72 33 47 32 37 16 94 29",
                    "53 71 44 65 25 43 91 52 97 51 14",
                    "70 11 33 28 77 73 17 78 39 68 17 57",
                    "91 71 52 38 17 14 91 43 58 50 27 29 48",
                    "63 66 04 68 89 53 67 30 73 16 69 87 40 31",
                    "04 62 98 27 23 09 70 98 73 93 38 53 60 04 23"];

  const TRIANGLE_TEST = [ "3",
                          "7 4",
                          "2 4 6",
                          "8 5 9 3" ];

    const PARSED = TRIANGLE.map((i)=>{ return i.split(' '); })
                           .map((ary)=>{ return ary.map((str)=>{ return parseInt(str, 10); }); });

    const MAX_VALUES = PARSED.map((ary)=>{ return Math.max.apply(null, ary); });
    const CUM_MAX_VALUES = MAX_VALUES.map((cur,i,arr)=>{ return arr.slice(i).reduce((p,c)=>{ return p+c; }); });

  let get_max_for_sub = function(i,j){
    if(i===(PARSED.length-1)) {
      return PARSED[i][j];
    }
    let max_left = PARSED[i][j] + get_max_for_sub(i+1, j);
    let max_right = PARSED[i][j] + get_max_for_sub(i+1, j+1);
    return (max_left>max_right) ? max_left : max_right;
  };

  console.log(`Answer is ${get_max_for_sub(0,0)}`);
})();
