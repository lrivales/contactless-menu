const editButton = document.querySelectorAll('.edit-cart-btn');
const deleteButton = document.querySelectorAll('.delete-cart-btn');
const submitCartBtn = document.querySelector('#cart-submit');

function editItem(event) {
    const order_id = localStorage.getItem('orderId');
    const menu_item_id = event.path[2].id;
    const quantityPEl = event.target.parentElement.parentElement.children[0].children[1];

    const quantityInput = document.createElement('select');
    quantityInput.type = 'select';

    for (i = 1; i < 6; i++) {
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

    const response = await fetch(`/api/order_items/${order_id}/${menu_item_id}`, {
        method: 'DELETE'
    });

    if (response.ok) {
        document.location.replace(`/cart/${order_id}`);
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

function submitCart(event) {
    event.preventDefault();
    localStorage.removeItem('orderId');
    document.location.replace('/');
}

editButton.forEach(btn => btn.addEventListener('click', editItem));
deleteButton.forEach(btn => btn.addEventListener('click', deleteItem));
submitCartBtn.addEventListener('click', submitCart);
