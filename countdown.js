var countdownGenerator = function (x) {

  // console.log(x);
  y = x;

  return function() {
    if(y > 0) {
      console.log('T-minus',y);
    }
    else if(y === 0){
      console.log('Blast Off!')
    }
    else
     console.log('Rockets already gone, bub!')
   y = y-1;
    return (y);
  }
};

var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!