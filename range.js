const range = function(start, end, step) {
  let rangeArray = [];

  if (start === undefined || end === undefined || step === undefined) return rangeArray;
  if (start > end) return rangeArray;
  if (step <= 0) return rangeArray;

  for(let i = start; i <= end; i += step){
    rangeArray.push(i);
  }
  return rangeArray;
}

console.log(range(0, 10, 0));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));

