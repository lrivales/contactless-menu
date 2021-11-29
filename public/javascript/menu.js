const menuCategoryListEl = document.querySelectorAll('.menu-category');
const allMenuItems = document.querySelectorAll('.menu-item-container')

function showMenuItems(event) {
    if (event.target.tagName === 'H2') {
        allMenuItems.forEach(item => item.style.display = 'none');
        
        const items = event.target.nextElementSibling;
        items.style.display = 'block';
    }
}

menuCategoryListEl.forEach(item => {
    item.addEventListener('click', showMenuItems);
})