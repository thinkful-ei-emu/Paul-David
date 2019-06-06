/*eslint-env jquery*/
'use strict';

function fizzBuzz(countTo) {
  let fb=[];
  console.log(hi);
  for(let i=1;i<=countTo;i++){
    if((i%3)===0 && (i%5)===0 ) {fb.push("fizzbuzz");}
    else if((i%3)===0) {fb.push("fizz");}
    else if((i%5)===0) {fb.push("buzz");}
    else {fb.push(i);}
  }
  console.log(hi);
  return fb;
}
