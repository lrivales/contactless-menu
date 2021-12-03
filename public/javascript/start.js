const startOrderEl = document.querySelector('#start-order-btn');
const continueOrderEl = document.querySelector('#continue-order-btn')
const errorMessage = document.querySelector('#start-order-error');
const currentOrder = localStorage.getItem('orderId');

if (currentOrder) {
    continueOrderEl.style.display = 'inline-block';
}

async function createOrder() {
    const table_number = document.querySelector('#table-number').value;
    const employee_id = Math.floor(Math.random() * 3) + 1;

    if (!table_number) {
        errorMessage.style.display = 'block';

        setTimeout(() => { errorMessage.style.display = 'none' }, 2000)
        return;
    }

    const response = await fetch('/api/orders', {
        method: 'POST',
        body: JSON.stringify({
            table_number,
            employee_id
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        response.json().then(data => localStorage.setItem('orderId', data.id));
        // document.location.replace('/menu');
    }
    else {
        alert(response.statusText);
    }
}

function continueOrder() {
    document.location.replace('/menu');
}

startOrderEl.addEventListener('click', createOrder);
continueOrderEl.addEventListener('click', continueOrder);