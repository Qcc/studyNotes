 (x, y, ...rest) => {
     var i, sum = x + y;
     for (i = 0; i < rest.length; i++) {
         sum += rest[i];
     }
     return sum;
 }