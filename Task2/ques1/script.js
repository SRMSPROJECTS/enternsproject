function validateForm() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    if (username === "" || password === "") {
        alert("User Name and Password cannot be empty!");
        return false;
    }

    if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        return false;
    }

    return true;  // form is valid
}

function clearForm() {
    document.getElementById('loginForm').reset();
}
