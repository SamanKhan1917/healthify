// Sample menu items
const menuItems = [
    {
        name: "Multigrain Wraps",
        price: 169,
        image: "images/multigrain-wrap.jpg",
        quantity: 0
    },
    {
        name: "Multigrain Sandwiches",
        price: 179,
        image: "images/multigrain-sandwich.jpg",
        quantity: 0
    },
    {
        name: "High Protein Quinoa Salad",
        price: 139,
        image: "images/high-protein-quinoa-salad.jpg",
        quantity: 0
    },
    {
        name: "Chicken Teriyaki Salad",
        price: 249,
        image: "images/chicken-teriyaki-salad.jpg",
        quantity: 0
    },
    {
        name: "Chicken Caesar Salad",
        price: 259,
        image: "images/chicken-caesar-salad.jpg",
        quantity: 0
    },
    {
        name: "Protein Smoothie",
        price: 149,
        image: "images/protein-smoothie.jpg",
        quantity: 0
    },
    {
        name: "Oats Pancakes",
        price: 239,
        image: "images/oats-pancakes.jpg",
        quantity: 0
    },
    {
        name: "Crunchy Salad",
        price: 119,
        image: "images/crunchy-salad.jpg",
        quantity: 0
    },
    {
        name: "Crispy Tofu Bowl",
        price: 149,
        image: "images/crispy-tofu-bowl.jpg",
        quantity: 0
    }
];

let cart = [];

// Event listener for the login form
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const username = event.target[0].value;
    const password = event.target[1].value;

    // Simple validation for demonstration
    if (username === "user" && password === "password") {
        alert("Login successful!");
        // Redirect or handle post-login functionality here
    } else {
        alert("Invalid credentials, please try again.");
    }
});

// Function to add an item to the cart
function addToCart(itemName) {
    const item = menuItems.find(menuItem => menuItem.name === itemName);
    if (item) {
        const cartItem = cart.find(cartItem => cartItem.name === itemName);
        if (cartItem) {
            cartItem.quantity++;
        } else {
            cart.push({ ...item, quantity: 1 });
        }
        alert(`${itemName} added to cart!`);
    }
}

// Function to display cart items
function displayCart() {
    let cartDetails = "Your Cart:\n";
    cart.forEach(item => {
        cartDetails += `${item.name} - Rs. ${item.price} x ${item.quantity}\n`;
    });
    if (cart.length === 0) {
        cartDetails += "Your cart is empty.";
    }
    alert(cartDetails);
}

// Function to handle order history (dummy data for now)
function displayOrderHistory() {
    alert("Order History:\n1. Multigrain Wraps - Rs. 169\n2. Chicken Caesar Salad - Rs. 259");
}

// Sample usage (you can bind these functions to buttons in your HTML)
document.addEventListener("DOMContentLoaded", () => {
    // You can also create buttons dynamically and add event listeners to them
    // Example button for adding items to cart
    const buttonContainer = document.getElementById("menu");
    menuItems.forEach(item => {
        const button = document.createElement("button");
        button.innerText = `Add ${item.name} to Cart`;
        button.addEventListener("click", () => addToCart(item.name));
        buttonContainer.appendChild(button);
    });
});
