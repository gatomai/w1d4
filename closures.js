function makeLoadedDie() {
  var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];

  var x = 0;

  return function() {
    var y = list[x];
    x = x + 1;
    return y;
  }
}

var rollLoadedDie = makeLoadedDie();

console.log(rollLoadedDie());  // 5
console.log(rollLoadedDie());  // 4
console.log(rollLoadedDie());  // 6
console.log(rollLoadedDie());  // 6
console.log(rollLoadedDie());  // 6
console.log(rollLoadedDie());  // 6
console.log(rollLoadedDie());  // 6
console.log(rollLoadedDie());  // 6
console.log(rollLoadedDie());  // 6
console.log(rollLoadedDie());  // 6
// console.log(rollLoadedDie());  // 6
