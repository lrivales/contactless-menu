const menuCategoryListEl = document.querySelectorAll('.menu-category');
const allMenuItems = document.querySelectorAll('.menu-item-container');
const addToOrderEl = document.querySelectorAll('.add-to-order');

function showMenuItems(event) {
    if (event.target.tagName === 'H2') {
        allMenuItems.forEach(item => item.style.display = 'none');
        
        const items = event.target.nextElementSibling;
        items.style.display = 'block';
    }
}

async function addToOrder(event) {
    const menu_item_id = event.path[2].id;
    const quantity = event.target.previousElementSibling.children[1].value;
    const order_id = localStorage.getItem('orderId');
    const successMessage = event.path[2].nextElementSibling;

    if (!quantity){
        successMessage.innerHTML = 'Select a quantity!';
        successMessage.style.color = '#ff0000';
        successMessage.style.display = 'block';
        setTimeout(() => { successMessage.style.display = 'none' }, 1000)
        return;
    }

    const response = await fetch('/api/order_items', {
        method: 'POST',
        body: JSON.stringify({
            menu_item_id,
            quantity,
            order_id
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        successMessage.innerHTML = 'Added!';
        successMessage.style.color = '#39c900';
        successMessage.style.display = 'block';
        setTimeout(() => { successMessage.style.display = 'none' }, 1000)
    }
    // change to base on error
    else {
        successMessage.innerHTML = 'Already in cart!';
        successMessage.style.color = '#ff0000';
        successMessage.style.display = 'block';
        setTimeout(() => { successMessage.style.display = 'none' }, 1000)
    }

    event.target.previousElementSibling.children[1].selectedIndex = 0;
}

menuCategoryListEl.forEach(item => {
    item.addEventListener('click', showMenuItems);
});

addToOrderEl.forEach(item => {
    item.addEventListener('click', addToOrder);
})