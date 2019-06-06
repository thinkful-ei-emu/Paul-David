'use strict';
/*eslint-env jquery*/
function main(){
  const cats = $('.lilcat>img');
  $('.lilcat').on('click',cats,(e)=>{
    $('.top>img').attr('src',$(e.target).attr('src'));
    e.preventDefault();
  });
  $('.lilcat').keypress(function (e) {
    var key = e.which;
    if(key === 13){
      $('.top>img').attr('src',$(e.target).attr('src'));
    }
    e.preventDefault();
  }); 
}

$(main);