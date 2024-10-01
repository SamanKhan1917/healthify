// JavaScript for Healthify functionality

let cart = [];

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', (event) => {
        const card = event.target.closest('.menu-card');
        const itemName = card.querySelector('h3').textContent;
        const itemPrice = card.querySelector('p').textContent;
        
        // Add item to cart
        cart.push({ name: itemName, price: itemPrice });
        alert(`${itemName} has been added to your cart!`);
    });
});

// Contact Form Submission
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Your message has been sent!');
    this.reset();
});

// Functionality for Order History (placeholder)
document.querySelector('#order-history').addEventListener('click', function() {
    // Implement logic to display order history based on user ID
    alert('Display order history for user ID');
});
