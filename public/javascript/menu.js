const menuCategoryListEl = document.querySelectorAll('.menu-category');
const allMenuItems = document.querySelectorAll('.menu-item-container');
const addToOrderEl = document.querySelectorAll('.add-to-order');

const orderInfo = [];

function showMenuItems(event) {
    if (event.target.tagName === 'H2') {
        allMenuItems.forEach(item => item.style.display = 'none');
        
        const items = event.target.nextElementSibling;
        items.style.display = 'block';
    }
}

function addToOrder(event) {
    const id = event.target.id;
    const quantity = event.target.previousElementSibling.children[1].value;
    const name = event.target.parentElement.previousElementSibling.children[0].innerHTML;
    console.log(event.target.previousElementSibling.children[1], id, quantity, name)

    if (!quantity){
        window.alert('Please select a number');
        return;
    }

    const inOrder = checkIfInOrder(id); 

    if (!inOrder) {
        orderInfo.push({id, name, quantity});
    }
    else {
        window.alert('This item is already in your cart.');
        return;
    }

    localStorage.setItem('order', JSON.stringify(orderInfo));
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