'use strict';
/*eslint-env jquery*/
const cats = $('.lilcat>img');
$('.lilcat').on('click',cats,(e)=>{
  $('.top>img').attr('src',$(e.currentTarget).attr('src'));
  e.preventDefault();
});