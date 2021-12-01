const editButton = document.querySelectorAll('.edit-cart-btn');
const deleteButton = document.querySelectorAll('.delete-cart-btn');

function editItem(event) {
    const order_id = localStorage.getItem('orderId');
    const menu_item_id = event.path[2].id;
    const quantityPEl = event.target.parentElement.children[0];

    const quantityInput = document.createElement('select');
    quantityInput.type = 'select';

    for (i=1; i < 6; i++) {
        const quantityOption = document.createElement('option');
        quantityOption.innerHTML = i;
        quantityInput.appendChild(quantityOption);
    }

    quantityInput.className = 'cart-quantity-input';
    quantityPEl.replaceWith(quantityInput);
    event.target.innerHTML = 'Confirm';

    event.target.addEventListener('click', () => {
        const newQuantity = quantityInput.selectedIndex + 1;
        confirmEdit(order_id, menu_item_id, newQuantity)
    });
}

async function deleteItem(event) {
    const order_id = localStorage.getItem('orderId');
    const menu_item_id = event.path[2].id;

    const confirmDelete = window.confirm('Are you sure you want to remove this item?');
    console.log(menu_item_id, event);

    if (confirmDelete) {
        const response = await fetch(`/api/order_items/${order_id}/${menu_item_id}`, {
            method: 'DELETE'
        });

        if (response.ok) {
            document.location.replace(`/cart/${order_id}`);
        }
    }
}

async function confirmEdit(order_id, menu_item_id, quantity) {
    const response = await fetch(`/api/order_items/${order_id}/${menu_item_id}`, {
        method: 'PUT',
        body: JSON.stringify({
            quantity
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        document.location.replace(`/cart/${order_id}`);
    }
}

editButton.forEach(btn => btn.addEventListener('click', editItem));
deleteButton.forEach(btn => btn.addEventListener('click', deleteItem));