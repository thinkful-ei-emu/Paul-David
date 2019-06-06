
/*eslint-env jquery*/
'use strict';
function toggleCheck(){
  $('.shopping-item-toggle').on('click',e=>{
    e.preventDefault();
    const parentParentChild= $(e.currentTarget).parent().parent().children('span');
    parentParentChild.toggleClass('shopping-item__checked');
  });
}

function toggleDelete(){
  $('.shopping-item-delete').on('click',e=>{
    e.preventDefault();
    $(e.currentTarget).parent().parent().remove();
  });
}





$(toggleCheck);
$(toggleDelete);