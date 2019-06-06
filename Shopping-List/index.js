
/*eslint-env jquery*/
'use strict';
function toggleCheck(){
  $('.shopping-list').on('click','.shopping-item-toggle',e=>{
    /*e.preventDefault();
    let crossIt;
    if($(e.target).attr('class')==='shopping-item-toggle'){
      crossIt= $(e.target).parent().parent().children('span');
    }
    else{
      crossIt= $(e.target).parent().parent().parent().children('span');
    }
    crossIt.toggleClass('shopping-item__checked'); */
    
    e.preventDefault();
<<<<<<< HEAD
   
    const parentParentChild= $(e.target).parent().closest('span');
    console.log(e.target);
    console.log(parentParentChild);
=======
    console.log($(e.target));
    console.log($(e.currentTarget));
    console.log($(e.delegateTarget));
    const parentParentChild= $(e.target).closest('li').find('.shopping-item');

>>>>>>> c8cfb84bf7a215dd6f1bd59fb1900dee46928207
    parentParentChild.toggleClass('shopping-item__checked');
    //e.stopPropogation();
  });
}

function toggleDelete(){
  $('.shopping-list').on('click','.shopping-item-delete',e=>{
    e.preventDefault();
    $(e.target).closest('li').remove();
  });
}

$(()=>{
<<<<<<< HEAD
  toggleCheck();
  //toggleDelete();
=======
>>>>>>> c8cfb84bf7a215dd6f1bd59fb1900dee46928207
  $('#js-shopping-list-form').on('submit',e=>{
    e.preventDefault();
    let newItem = $('#input').val();
    let itemHtml=`<li><span class="shopping-item">${newItem}</span><div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button><button class="shopping-item-delete"><span class="button-label">delete</span></button></div></li>`;
    $('.shopping-list').append(itemHtml);
  });
});

$(toggleCheck);
$(toggleDelete);