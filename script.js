let cart = [];
let orderHistory = [];

// Function to add items to the cart
function addToCart(itemName, itemPrice) {
    cart.push({ name: itemName, price: itemPrice });
    alert(`${itemName} has been added to your cart.`);
}

// Function to show the cart popup
function showCart() {
    const cartPopup = document.getElementById('cart-popup');
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';

    if (cart.length === 0) {
        cartItems.innerHTML = '<p>Your cart is empty.</p>';
    } else {
        cart.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.textContent = `${item.name} - Rs. ${item.price}`;
            cartItems.appendChild(itemElement);
        });
    }

    cartPopup.style.display = 'block';
}

// Function to close the cart popup
function closeCart() {
    const cartPopup = document.getElementById('cart-popup');
    cartPopup.style.display = 'none';
}

// Function to proceed to checkout
function proceedToCheckout() {
    if (cart.length === 0) {
        alert('Your cart is empty! Add items to cart before proceeding to checkout.');
    } else {
        alert('Proceeding to checkout!');
        // Logic for checkout can be implemented here
    }
}

// Function to display order history for a specific user
function displayOrderHistory(userId) {
    const ordersList = document.getElementById('orders-list');
    ordersList.innerHTML = ''; // Clear existing orders

    const userOrders = orderHistory.filter(order => order.userId === userId);
    
    if (userOrders.length === 0) {
        ordersList.innerHTML = '<p>No orders found.</p>';
    } else {
        userOrders.forEach(order => {
            const orderElement = document.createElement('div');
            orderElement.textContent = `Order: ${order.items.map(item => item.name).join(', ')} - Total: Rs. ${order.total}`;
            ordersList.appendChild(orderElement);
        });
    }
}

// Function to simulate placing an order
function placeOrder(userId) {
    if (cart.length === 0) {
        alert('Your cart is empty! Add items to cart before placing an order.');
        return;
    }

    const total = cart.reduce((sum, item) => sum + item.price, 0);
    orderHistory.push({ userId: userId, items: [...cart], total: total });
    cart = []; // Clear cart after placing the order
    alert('Order placed successfully!');

    // Optionally, you can display the order history after placing an order
    displayOrderHistory(userId);
}

// Example user ID for demonstration
const userId = 'user123'; // Replace this with actual user ID logic
document.getElementById('order-history').addEventListener('click', () => displayOrderHistory(userId));

// Add event listeners to add-to-cart buttons
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', showCart);
});

// Optionally, you could call placeOrder(userId) when a checkout action is confirmed
