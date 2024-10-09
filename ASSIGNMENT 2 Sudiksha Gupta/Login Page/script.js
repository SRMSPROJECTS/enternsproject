function validateForm() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let valid = true;

    // Reset error messages
    document.getElementById("usernameError").style.display = "none";
    document.getElementById("passwordError").style.display = "none";

    // Validate username (length between 5 and 50)
    if (username.length < 5 || username.length > 50) {
        document.getElementById("usernameError").textContent = "Username must be between 5 and 50 characters.";
        document.getElementById("usernameError").style.display = "block";
        valid = false;
    }

    // Validate password (at least one digit, one special character, one uppercase, and one lowercase letter)
    let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$]).{8,}$/;
    if (!passwordRegex.test(password)) {
        document.getElementById("passwordError").textContent = 
            "Password must include at least 1 digit, 1 special character (#@$), 1 uppercase letter, and 1 lowercase letter.";
        document.getElementById("passwordError").style.display = "block";
        valid = false;
    }

    return valid;
}

function clearForm() {
    document.getElementById("loginForm").reset();
    document.getElementById("usernameError").style.display = "none";
    document.getElementById("passwordError").style.display = "none";
}
