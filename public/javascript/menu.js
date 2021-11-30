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

    console.log(menu_item_id, quantity, order_id)

    if (!quantity){
        window.alert('Please select a number');
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
        successMessage.style.display = 'block';
        setTimeout(() => { successMessage.style.display = 'none' }, 1000)
    }
    else {
        alert(response.statusText);
    }

    event.target.previousElementSibling.children[1].selectedIndex = 0;
}

// function checkIfInOrder(id) {
//     const array = JSON.parse(localStorage.getItem('order'));
//     if (!array) {
//         return false;
//     }

//     for(i=0; i < array.length; i++) {
//         if(array[i].id === id) {
//             return true;
//         }
//     }

//     return false;
// }

// function loadOrderItems() {
//     const storedOrder = JSON.parse(localStorage.getItem('order'));
//     storedOrder.forEach(item => orderInfo.push(item));
// }

menuCategoryListEl.forEach(item => {
    item.addEventListener('click', showMenuItems);
});

addToOrderEl.forEach(item => {
    item.addEventListener('click', addToOrder);
})

// loadOrderItems();