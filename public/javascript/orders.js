//add functionality to 'order finished' button -> order card disappears when button is clicked
async function deleteCardHandler(event) {
    event.preventDefault();
    console.log(event);
    
    const orderId = (event.target.dataset.orderid);
    
    const orderCard = document.querySelector(`[data-ordercard="${orderId}"]`)

    fetch('http://example.com/movies.json')
    //to delete order form db
    //use fetch
    //make request to api to delete
    //use orderId as param
    //if successful then order.remove
    
    orderCard.remove();
};

document.querySelectorAll('button').forEach((btn) => {
    
    addEventListener('click', deleteCardHandler);
})

