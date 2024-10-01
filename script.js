// Cart Functionality
let cart = [];
let cartCount = 0;
const cartCountElement = document.querySelector('.cart-count');

document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        const item = e.target.closest('.menu-item').querySelector('h3').textContent;
        cart.push(item);
        cartCount++;
        cartCountElement.textContent = cartCount;
        alert(item + ' added to cart');
    });
});

// Checkout Page Total Calculation
const calculateTotal = () => {
    let total = 0;
    cart.forEach(item => {
        // Add logic to match prices with items in cart
    });
    document.getElementById('total-amount').textContent = total;
};
