
function addItem() {$('#js-shopping-list-form').submit(function(event) {
    event.preventDefault();

    const toBuy = $('#shopping-list-entry').val(); 

    $('#shopping-list-entry').val('');

    $('.shopping-list').append(
        `<li>
          <span class="shopping-item">${toBuy}</span>
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
  }

function deleteItem () {
$('.shopping-list').on('click', '.shopping-item-delete', function(event) {
  $(this).closest('li').remove();
});
}

function checkOff () {
  $('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
    $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
  });
}

function init() {
  $(addItem);
  $(deleteItem);
  $(checkOff);
}

$(init);
