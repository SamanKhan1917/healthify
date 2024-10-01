// Sample menu items
const menuItems = [
    { name: 'Multigrain Wrap', price: 169, img: 'multigrain-wrap.jpg' },
    { name: 'Multigrain Sandwich', price: 179, img: 'multigrain-sandwiches.jpg' },
    { name: 'High Protein Quinoa Salad', price: 139, img: 'high-protein-quinoa-salad.jpg' },
    { name: 'Chicken Teriyaki Salad', price: 249, img: 'chicken-teriyaki-salad.jpg' },
    { name: 'Chicken Caesar Salad', price: 259, img: 'chicken-caesar-salad.jpg' },
    { name: 'Protein Smoothie', price: 149, img: 'protein-smoothie.jpg' },
    { name: 'Oats Pancakes', price: 239, img: 'oatmeal-pancakes.jpg' },
    { name: 'Crunchy Salad', price: 119, img: 'crunchy-salad.jpg' },
    { name: 'Crispy Tofu Bowl', price: 149, img: 'tofu-bowl.jpg' }
];

let cart = [];

// Function to load menu items dynamically
function loadMenu() {
    const menuContainer = document.querySelector('.menu-container');
    menuContainer.innerHTML = ''; // Clear existing content
    menuItems.forEach(item => {
        const card = document.createElement('div');
        card.classList.add('menu-card');
        card.innerHTML = `
            <img src="${item.img}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>Price: Rs. ${item.price}</p>
            <button class="add-to-cart" data-name="${item.name}" data-price="${item.price}">Add to Cart</button>
        `;
        menuContainer.appendChild(card);
    });
    attachAddToCartListeners();
}

// Function to attach event listeners to "Add to Cart" buttons
function attachAddToCartListeners() {
    const buttons = document.querySelectorAll('.add-to-cart');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const itemName = this.getAttribute('data-name');
            const itemPrice = parseInt(this.getAttribute('data-price'));
            addToCart(itemName, itemPrice);
        });
    });
}

// Function to add item to cart
function addToCart(name, price) {
    const existingItem = cart.find(item => item.name === name);
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ name, price, quantity: 1 });
    }
    alert(`${name} added to cart!`);
}

// Function to view cart
function viewCart() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }

    let cartContents = 'Cart Contents:\n';
    let totalAmount = 0;
    cart.forEach(item => {
        cartContents += `${item.name} - Rs. ${item.price} x ${item.quantity}\n`;
        totalAmount += item.price * item.quantity;
    });
    cartContents += `Total Amount: Rs. ${totalAmount}\n`;
    alert(cartContents);
}

// Function to checkout
function checkout() {
    if (cart.length === 0) {
        alert('Your cart is empty! Cannot proceed to checkout.');
        return;
    }
    
    const totalAmount = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    alert(`Thank you for your order! Total Amount: Rs. ${totalAmount}`);
    cart = []; // Clear cart after checkout
}

// Function to view order history (simulated)
function viewOrderHistory() {
    // This can be replaced with an actual API call or database fetch
    const orders = [
        { id: 1, items: ['Multigrain Wrap'], total: 169 },
        { id: 2, items: ['Chicken Caesar Salad', 'Protein Smoothie'], total: 408 }
    ];
    let history = 'Order History:\n';
    orders.forEach(order => {
        history += `Order ID: ${order.id}, Items: ${order.items.join(', ')}, Total: Rs. ${order.total}\n`;
    });
    alert(history);
}

// Load menu items on page load
document.addEventListener('DOMContentLoaded', loadMenu);

// Add event listeners for checkout and view cart
document.querySelector('#checkout').addEventListener('click', checkout);
document.querySelector('#order-history').addEventListener('click', viewOrderHistory);
document.querySelector('#view-cart').addEventListener('click', viewCart);
