
/*eslint-env jquery*/
'use strict';
function toggleCheck(){
  $('.shopping-list').on('click','.shopping-item-toggle',e=>{
    e.preventDefault();
    /* if($(e.target).attr('class')==='shopping-item-toggle'){
      const parentParentChild= $(e.target).parent().parent().children('span');
      parentParentChild.toggleClass('shopping-item__checked');
      
    }
    else */
    const parentParentChild= $(e.currentTarget).parent().siblings('span');/* 
    console.log($(e.currentTarget));
    console.log($(parentParentChild)); */
    parentParentChild.toggleClass('shopping-item__checked');
  });
}

function toggleDelete(){
  $('.shopping-list').on('click','.shopping-item-delete',e=>{
    e.preventDefault();
    $(e.target).closest('li').remove();
  });
}

$(()=>{
  $('#js-shopping-list-form').on('submit',e=>{
    e.preventDefault();
    let newItem = $('#input').val();
    let itemHtml=`<li><span class="shopping-item">${newItem}</span><div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button><button class="shopping-item-delete"><span class="button-label">delete</span></button></div></li>`;
    $('.shopping-list').append(itemHtml);
  });
});

$(toggleCheck);
$(toggleDelete);