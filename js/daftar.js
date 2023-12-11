function validateForm() {
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var passwordError = document.getElementById("passwordError");
    var submitButton = document.querySelector('button[type="submit"]');

    if (password !== confirmPassword) {
      passwordError.innerHTML = "Password does not match";
      submitButton.disabled = true;
      return false;
    } else {
      passwordError.innerHTML = "";
      return true;
    }
}

function validatePassword() {
    passwordInput = document.getElementById("password");
    var passwordError = document.getElementById("passwordError");
    var submitButton = document.querySelector('button[type="submit"]');

    var password = passwordInput.value;

    if (password.length < 8) {
        passwordError.innerHTML = "Password must be at least 8 characters long.";
        submitButton.disabled = true;
        return;
    }

    passwordError.innerHTML = "";
    submitButton.disabled = false;
}

function validateEmail() {
    var emailInput = document.getElementById("email");
    var emailError = document.getElementById("emailError");
    var submitButton = document.querySelector('button[type="submit"]');

    var email = emailInput.value;

    // Check if the email is a valid format
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      emailError.innerHTML = "Please enter a valid email address.";
      submitButton.disabled = true;
      return;
    }

    // If the email is valid, clear the error message and enable the submit button
    emailError.innerHTML = "";
    submitButton.disabled = false;
  }