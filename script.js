'use strict';
// UX: enter items to purchase by
// entering textand hitting 'return' or clinking the 'add item button'

// check and uncheck items on the list by clicking a check button

// permanently remove items from the list.

//CDN hosted of jQuery -- DONE
// DO NOT ALTER html or css files except for link

function createShoppingList() {
    console.log('something');
    // User types in an item and we create a container w/ the text of the item they want.
    $('#js-shopping-list-form').submit(event => {
        // everything in this block is in the context of the submission event.
        // stop default form submission behavior of opening to a new window.
        event.preventDefault();

        // Create a div container holding the text user inputs and two buttons.
        // use $(this) instead of event.currentTarget
        const userWantsThisItem = $(this).find('#shopping-list-entry').val();
        console.log(userWantsThisItem);
        $("ul").append(`<li>
    <span class="shopping-item">${userWantsThisItem}</span>
    <div class="shopping-item-controls">
        <button class="shopping-item-toggle">
<span class="button-label">check</span>
</button>
        <button class="shopping-item-delete">
<span class="button-label">delete</span>
</button>
    </div>
</li>`);

    });
    // our container should have a check and delete button.
    $('.shopping-item-toggle').on('click', event => {
        // on click of the check button, text decorate line through our span element.
        // this also needs to happen on a key down
        event.preventDefault();
        console.log(event.target);
        $(event.target).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
    });

    $('.shopping-item-delete').on('click', event => {
        console.log(event.target);
        $(event.target).closest('li').hide();
    });
}
$(createShoppingList);