document.getElementById("forgotPasswordForm").addEventListener("submit", function(event) {
  const newPassword = document.getElementById("newPassword").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  const errorMessage = document.getElementById("error-message");

  // Check if passwords are entered
  if (newPassword === "" || confirmPassword === "") {
      errorMessage.textContent = "Please fill in all fields.";
      event.preventDefault();
      return false;
  }

  // Check if passwords match
  if (newPassword !== confirmPassword) {
      errorMessage.textContent = "Passwords do not match.";
      event.preventDefault();
      return false;
  }

  errorMessage.textContent = ""; // Clear error message if validation is successful
  alert("Password updated successfully!");
  return true;
});

// Function to reset form fields to initial values
function resetForm() {
  document.getElementById("newPassword").value = "";
  document.getElementById("confirmPassword").value = "";
  document.getElementById("error-message").textContent = ""; // Clear error message
}

// Function to clear the form
function clearForm() {
  document.getElementById("forgotPasswordForm").reset();
  document.getElementById("error-message").textContent = ""; // Clear error message
}
