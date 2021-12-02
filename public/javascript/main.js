const cartButton = document.querySelector('#cart-btn');

cartButton.addEventListener('click', () => {
    const orderId = localStorage.getItem('orderId');

    if (!orderId) {
        window.alert('No active order! Please start an order.');
    }
    else if (document.location.pathname.split('/')[1] === 'cart') {
        document.location.replace(`cart/${orderId}`);
    }
});

console.log(document.location.pathname.split('/')[1]);