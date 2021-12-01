const cartButton = document.querySelector('#cart-btn');
const pathName = document.location.pathname.split('/')[1];
const orderId = localStorage.getItem('orderId');
let click = false;

async function checkOrderItems () {
    if (!orderId) {
        window.alert('Start an order');
        return;
    }

    const response = await fetch(`/api/order_items/${orderId}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        response.json().then(data => {
            console.log(data);
            if (Object.keys(data).length === 0) {
                window.alert('Please add to order');
            } else {
                cartButton.href = `/cart/${orderId}`;
                if (!click) {
                    click = true;
                    cartButton.click();
                }
            }
        });
    }
}
cartButton.addEventListener('click', checkOrderItems);