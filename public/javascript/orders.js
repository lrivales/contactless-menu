async function deleteCardHandler(event) {
    event.preventDefault();
    
    const orderId = (event.target.dataset.orderid);
    const orderCard = document.querySelector(`[data-ordercard="${orderId}"]`)

    const response = await fetch('http://localhost:3001/api/orders/' + orderId, {
        method: 'DELETE',
        headers: {
            'Content-type': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            orderCard.remove();
        }
        
    })
    
};

document.querySelectorAll('button').forEach((btn) => {
    
    addEventListener('click', deleteCardHandler);
})

