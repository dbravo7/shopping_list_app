// $(function () { 'Saw this used in fizz buzz problem. Why is it needed? Code works
// fine without it for this situation. Also, went through tutorials that recommended 
// using the following to encompass all code: $(document).ready(() => { }. 
// Is this standard practice?' 

  $('#js-shopping-list-form').submit(function(event) {

    "use strict";

    event.preventDefault();
    

    const item = $(event.currentTarget).find('input[name="shopping-list-entry"]').val();
    // debugger;
    const new_item = `<li>
      <span class= "shopping-item" >${item}</span>
      <div class="shopping-item-controls">
        <button class="shopping-item-toggle">
          <span class="button-label">check</span>
        </button>
        <button class="shopping-item-delete">
          <span class="button-label">delete</span>
        </button>
      </div>
      </li>`;
    
    if (item) {
      $('.shopping-list').prepend(new_item);
      $(event.currentTarget).find('input[name="shopping-list-entry"]').val("");
    }
  });
// }


  $(document).on('click', '.button-label', function(event) {

    const parent_node = $(this).parent();

    if (parent_node.hasClass("shopping-item-toggle")) {
      parent_node.closest("li").find('.shopping-item').toggleClass('shopping-item__checked');
    } else if (parent_node.hasClass("shopping-item-delete")) {
      parent_node.closest("li").remove();
    }
  });
