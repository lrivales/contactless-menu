const editButton = document.querySelectorAll('.edit-cart-btn');
const deleteButton = document.querySelectorAll('.delete-cart-btn');

function editItem() {

}

function deleteItem() {

}

editButton.forEach(btn => btn.addEventListener('click', editItem));
deleteButton.forEach(btn => btn.addEventListener('click', deleteItem));