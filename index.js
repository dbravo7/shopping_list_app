// $(function () { 'Saw this used in fizz buzz problem. Why is it needed? Code works
// fine without it for this situation. Also, went through tutorials that recommended 
// using the following to encompass all code: $(document).ready(() => { }. 
// Is this standard practice?' 

// Following code adds an item to the list 

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

// In the cat carousel assignment, only the 'click' handler is used but 
// the key 'enter' also works in selecting items. However, I only used the 
// handler 'click' here and the buttons in the web app are focused using 'tab', but 
// spacebar or enter do not execute any function. Spacebar does cause the button
// to change color, but does nothing else. Not sure what is different in my code
// than the carousel cat assignment. 


// Following code checks, unchecks and deletes items 

  $(document).on('click', '.button-label', function(event) {

    const parent_node = $(this).parent();

    if (parent_node.hasClass("shopping-item-toggle")) {
      parent_node.closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
    } else if (parent_node.hasClass("shopping-item-delete")) {
      parent_node.closest("li").remove();
    }
  });
