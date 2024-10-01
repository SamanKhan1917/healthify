// JavaScript code to handle dynamic features and functionality

document.addEventListener('DOMContentLoaded', function () {
    // Handle "Add to Cart" button clicks
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function () {
            const menuItem = this.parentElement; // Get the parent menu card
            const itemName = menuItem.querySelector('h3').innerText; // Get item name
            const itemPrice = menuItem.querySelector('p').innerText; // Get item price
            
            // Log the item to console (you can add your cart logic here)
            console.log(`Added to cart: ${itemName} - ${itemPrice}`);
            
            // Optionally, show an alert
            alert(`${itemName} has been added to your cart!`);
        });
    });

    // Example JavaScript for the login form submission
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Prevent the default form submission
            
            // Get the username and password (you can implement your own authentication logic here)
            const username = this[0].value;
            const password = this[1].value;
            
            // For now, just log them to the console
            console.log('Username:', username);
            console.log('Password:', password);
            
            // Here you would typically send the data to your server for authentication
            // Redirect to the main page or show an error message depending on authentication results
        });
    }
});
