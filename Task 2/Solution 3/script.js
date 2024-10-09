document.getElementById('forgotPasswordForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const newPassword = document.getElementById('newPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (newPassword === confirmPassword) {
        alert('Password successfully changed!');
        this.reset();
    } else {
        alert('Passwords do not match. Please try again.');
        document.getElementById('newPassword').focus();
    }
});