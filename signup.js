document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    // Simple validation for password matching
    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }

    // Process the sign-up (for demonstration purposes, just log the data)
    console.log('User signed up:', { username, email, password });
    alert('Sign-up successful!'); // Show success message
    // Redirect to login page or dashboard
    window.location.href = 'login.html';
});
