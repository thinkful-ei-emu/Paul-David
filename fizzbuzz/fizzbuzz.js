/*eslint-env jquery*/
'use strict';

function fizzBuzz(countTo) {
  let fb=[];
  for(let i=1;i<=countTo;i++){
    if((i%3)===0 && (i%5)===0 ) {fb.push('fizzbuzz');}
    else if((i%3)===0) {fb.push('fizz');}
    else if((i%5)===0) {fb.push('buzz');}
    else {fb.push(i);}
  }
  return fb;
}

function handleSubmit(){
  event.preventDefault();
  $('#form').submit( event=> {
    const input=$('#form').val();
    //$('#form').val()='';
    const array=fizzBuzz(input);
    let html =array.map((value)=>
      `<div class="fizz-buzz-item">
        <span>${value}</span>
      </div>`
    );
    $('#js-results').html(html);
  
  });
}

 
