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
  $('#form').submit( e=> {
    e.preventDefault();
    const input=$('#input').val();
    //console.log(input);
    $('#input').val('');
    const array=fizzBuzz(input);
    let html =array.map((value)=> {
      if(typeof value==='string'){
        return `<div class="fizz-buzz-item ${value}">
        <span>${value}</span>
        </div>`;
      }

      return `<div class="fizz-buzz-item">
        <span>${value}</span>
      </div>`;
    });
    $('.js-results').html(html);
  
  });
}

$(handleSubmit);

 
