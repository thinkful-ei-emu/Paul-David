'use strict';
/*eslint-env jquery*/
function main(){
  const cats = $('.lilcat>img');
  $('.lilcat').on('click',cats,(e)=>{
    $('.top>img').attr('src',$(e.target).attr('src'));
    e.preventDefault();
  });
}

$(main);
