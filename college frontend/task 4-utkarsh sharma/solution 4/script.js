document.getElementById("lengthInput").value = 6; // Set default length to 6

document.getElementById("generateButton").addEventListener("click", () => {
  const length = parseInt(document.getElementById("lengthInput").value);

  if (isNaN(length) || length < 6 || length > 20) {
    // Change minimum length to 6
    alert("Please enter a valid password length between 6 and 20.");
    return;
  }
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
  let password = "";
  for (let i = 0; i < length; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  document.getElementById("passwordDisplay").value = password;
});

document.getElementById("copyButton").addEventListener("click", () => {
  const passwordDisplay = document.getElementById("passwordDisplay");

  if (passwordDisplay.value) {
    passwordDisplay.select();
    passwordDisplay.setSelectionRange(0, 99999);
    document.execCommand("copy");

    const copyMessage = document.getElementById("copyMessage");
    copyMessage.innerText = "Password copied to clipboard!";

    setTimeout(() => {
      copyMessage.innerText = "";
    }, 3000);
  } else {
    alert("Generate a password first!");
  }
});
