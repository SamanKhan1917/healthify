// Sample menu items
const menuItems = [
    {
        name: "Multigrain Wraps",
        price: 169,
        image: "multigrain-wraps.jpg",
    },
    {
        name: "Multigrain Sandwiches",
        price: 179,
        image: "multigrain-sandwiches.jpg",
    },
    {
        name: "High Protein Quinoa Salad",
        price: 139,
        image: "high-protein-quinoa-salad.jpg",
    },
    {
        name: "Chicken Teriyaki Salad",
        price: 249,
        image: "chicken-teriyaki-salad.jpg",
    },
    {
        name: "Chicken Caesar Salad",
        price: 259,
        image: "chicken-caesar-salad.jpg",
    },
    {
        name: "Protein Smoothie",
        price: 149,
        image: "protein-smoothie.jpg",
    },
    {
        name: "Oats Pancakes",
        price: 239,
        image: "oatmeal-pancakes.jpg",
    },
    {
        name: "Crunchy Salad",
        price: 119,
        image: "crunchy-salad.jpg",
    },
    {
        name: "Crispy Tofu Bowl",
        price: 149,
        image: "tofu-bowl.jpg",
    },
];

// Cart to hold selected items
let cart = [];

// Function to prompt user login
function promptLogin() {
    const isLoggedIn = confirm("You need to log in to access the menu. Would you like to log in or continue as a guest?");
    if (isLoggedIn) {
        window.location.href = 'login.html'; // Redirect to login page
    } else {
        continueAsGuest(); // Allow browsing as a guest
    }
}

// Function for continuing as a guest
function continueAsGuest() {
    alert("Welcome, guest! You can browse the menu but some features may be limited.");
}

// Function to add item to cart
function addToCart(item) {
    cart.push(item);
    alert(`${item.name} has been added to your cart.`);
}

// Function to display menu items
function displayMenu() {
    const menuContainer = document.querySelector('.menu');
    menuItems.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'menu-item';

        itemDiv.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>Price: ₹${item.price}</p>
            <button class="add-to-cart" onclick="addToCart(${JSON.stringify(item)})">Add to Cart</button>
        `;

        menuContainer.appendChild(itemDiv);
    });
}

// Optional: Handle the login form submission
document.getElementById("login-form")?.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    const username = this[0].value; // Get username
    const password = this[1].value; // Get password

    // Here you can add logic for authentication, like calling an API
    if (username === "user" && password === "pass") { // Simple validation
        alert("Login successful!");
        window.location.href = 'index.html'; // Redirect to main page
    } else {
        alert("Invalid credentials, please try again."); // Show error for invalid login
    }
});

// Initialize menu display on page load
document.addEventListener('DOMContentLoaded', () => {
    displayMenu();
});
