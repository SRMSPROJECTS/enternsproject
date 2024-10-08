document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if (username.length < 6) {
        alert('Username must be at least 6 characters long.');
    } else if (password.length < 8) {
        alert('Password must be at least 8 characters long.');
    } else {
        alert('Login successful!');
    }
});

function clearForm() {
    document.getElementById('loginForm').reset();
}
