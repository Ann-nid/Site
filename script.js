let cart = [];

let addButtons = document.querySelectorAll('.add');
let filterButtons = document.querySelectorAll('.filter button');
let checkoutBtn = document.getElementById('checkout');
let itemsDiv = document.querySelector('.items');
let totalDiv = document.querySelector('.total');

function showCart() {
    itemsDiv.innerHTML = '';
    let total = 0;
    
    for (let i = 0; i < cart.length; i++) {
        total += cart[i].price;
        let div = document.createElement('div');
        div.innerHTML = cart[i].name + ' - ' + cart[i].price + ' ₽ <button onclick="removeItem(' + i + ')">Удалить</button>';
        itemsDiv.appendChild(div);
    }
    
    totalDiv.innerHTML = 'Итого: ' + total + ' ₽';
}

function removeItem(index) {
    cart.splice(index, 1);
    showCart();
}

for (let i = 0; i < addButtons.length; i++) {
    addButtons[i].addEventListener('click', function() {
        let product = this.parentElement;
        let name = product.getAttribute('data-name');
        let price = Number(product.getAttribute('data-price'));
        
        cart.push({ name: name, price: price });
        showCart();
    });
}

for (let i = 0; i < filterButtons.length; i++) {
    filterButtons[i].addEventListener('click', function() {
        let filter = this.getAttribute('data-filter');
        let products = document.querySelectorAll('.product');
        
        for (let j = 0; j < products.length; j++) {
            let category = products[j].getAttribute('data-category');
            
            if (filter === 'all' || category === filter) {
                products[j].style.display = 'block';
            } else {
                products[j].style.display = 'none';
            }
        }
    });
}

checkoutBtn.addEventListener('click', function() {
    if (cart.length === 0) {
        alert('Корзина пуста');
    } else {
        alert('Покупка прошла успешно!');
        cart = [];
        showCart();
    }
});