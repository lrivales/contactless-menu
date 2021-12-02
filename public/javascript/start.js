const startOrderEl = document.querySelector('#start-order-btn');
const errorMessage = document.querySelector('#start-order-error');

async function createOrder() {
    const table_number = document.querySelector('#table-number').value;
    const employee_id = Math.floor(Math.random() * 3);
    const currentOrder = localStorage.getItem('orderId');

    if (!table_number) {
        errorMessage.style.display = 'block';

        setTimeout(() => { errorMessage.style.display = 'none' }, 3000)
        return;
    }

    if (currentOrder) {
        const continueOrder = window.confirm('Would you like to continue your previous order?');

        if (continueOrder) {
            document.location.replace('/menu');
            return;
        }
    }

    console.log(table_number);

    const response = await fetch('/api/orders', {
        method: 'POST',
        body: JSON.stringify({
            table_number,
            employee_id,
            customer_id: 1
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        response.json().then(data => localStorage.setItem('orderId', data.id));
        document.location.replace('/menu');
    }
    else {
        alert(response.statusText);
    }
}

startOrderEl.addEventListener('click', createOrder);