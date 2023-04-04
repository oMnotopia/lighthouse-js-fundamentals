//Print the numbers from 100 to 200 inclusive except when the number is a multiple
//of three, print "Loopy", a multiple of four, print "Lighthouse", or if a multiple
//of three and four print "LoopyLighthouse"
for(let counter = 100; counter <= 200; counter++){
  if (counter % 3 === 0 && counter % 4 === 0){
    console.log("LoopyLighthouse");
  } else if (counter % 4 === 0){
    console.log("Lighthouse")
  } else if (counter % 3 === 0){
    console.log("Loopy");
  } else{
    console.log(counter)
  }
}
