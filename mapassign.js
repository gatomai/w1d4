var words = ["ground", "control", "to", "major", "tom"];

map(words, function(word) {
  return word.length;
});

map(words, function(word) {
  return word.toUpperCase();
});

map(words, function(word) {
  return word.split('').reverse().join('');
});

function map(warr,fnc) {
   var resarr = [];
   for(element in warr){
    resarr.push(fnc(warr[element]));
   }
   console.log(resarr);
   return resarr;
}


