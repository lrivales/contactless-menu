const cartButton = document.querySelector('#cart-btn');
const pathName = document.location.pathname.split('/')[1];
const orderId = localStorage.getItem('orderId');
const cartAlert = document.querySelector('#cart-alert');
let click = false;

async function checkOrderItems() {
    if (!orderId) {
        cartAlert.innerHTML = 'Start an order!';
        setTimeout(() => {
            cartAlert.innerHTML = '';
        }, 2000)
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
                cartAlert.innerHTML = 'Cart is empty!';
                setTimeout(() => {
                    cartAlert.innerHTML = '';
                }, 2000)
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