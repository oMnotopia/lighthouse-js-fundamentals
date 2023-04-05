//Print the numbers from 100 to 200 inclusive except when the number is a multiple
//of three, print "Loopy", a multiple of four, print "Lighthouse", or if a multiple
//of three and four print "LoopyLighthouse"
// for(let counter = 100; counter <= 200; counter++){
//   if (counter % 3 === 0 && counter % 4 === 0){
//     console.log("LoopyLighthouse");
//   } else if (counter % 4 === 0){
//     console.log("Lighthouse")
//   } else if (counter % 3 === 0){
//     console.log("Loopy");
//   } else{
//     console.log(counter)
//   }
// }

// creates a line of * for a given length
function makeLine(length) {
  var line = "";
  for (var j = 1; j <= length; j++) {
      line += "* ";
  }
  return line + "\n";
}

// your code goes here.  Make sure you call makeLine() in your own code.
function buildTriangle(num){

  for(let counter = 1; counter <= num; counter++){
      console.log(makeLine(counter))
  }
}

// test your code by uncommenting the following line
console.log(buildTriangle(10));
