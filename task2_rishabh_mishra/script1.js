// Form validation
document.getElementById("loginForm").addEventListener("submit", function(event) {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const errorMessage = document.getElementById("error-message");

  if (username === "") {
      errorMessage.textContent = "Please enter your username.";
      event.preventDefault(); // Prevent form submission
      return false;
  }
  if (password === "") {
      errorMessage.textContent = "Please enter your password.";
      event.preventDefault(); // Prevent form submission
      return false;
  }

  errorMessage.textContent = ""; // Clear error message if validation is successful
  alert("Login successful!");
  return true;
});

// Clear the form fields
function clearForm() {
  document.getElementById("loginForm").reset();
  document.getElementById("error-message").textContent = ""; // Clear error message
}
