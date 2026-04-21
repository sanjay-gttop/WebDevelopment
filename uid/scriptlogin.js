document.addEventListener("DOMContentLoaded", function () {
    const registerBtn = document.getElementById("register");
    const loginBtn = document.getElementById("login");
    const container = document.getElementById("container");

    registerBtn.addEventListener("click", function () {
        container.classList.add("active");
    });

    loginBtn.addEventListener("click", function () {
        container.classList.remove("active");
    });

    // Form Validation
    const nameField = document.getElementById("nameis");
    const emailField = document.getElementById("email-signup");
    const passwordField = document.getElementById("password-signup");
    const signupForm = document.getElementById("signup-form");

    signupForm.addEventListener("submit", function (e) {
        e.preventDefault();
        if (validateForm()) {
            window.location.href = "homePage2.html";
        }
    });

    function setError(element, message) {
        const errorDisplay = element.nextElementSibling;
        errorDisplay.innerText = message;
        errorDisplay.classList.add("error");
        errorDisplay.classList.remove("success");
    }

    function setSuccess(element, message) {
        const successDisplay = element.nextElementSibling;
        successDisplay.innerText = message;
        successDisplay.classList.add("success");
        successDisplay.classList.remove("error");
    }

    function validateForm() {
        let isValid = true;

        const nameValue = nameField.value.trim();
        const emailValue = emailField.value.trim();
        const passwordValue = passwordField.value.trim();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Improved email validation regex

        if (nameValue === "") {
            setError(nameField, "Name is required");
            isValid = false;
        } else {
            setSuccess(nameField, "Looks good!");
        }

        if (emailValue === "") {
            setError(emailField, "Email is required");
            isValid = false;
        } else if (!emailPattern.test(emailValue)) {
            setError(emailField, "Invalid email format");
            isValid = false;
        } else {
            setSuccess(emailField, "Valid email");
        }

        if (passwordValue === "") {
            setError(passwordField, "Password is required");
            isValid = false;
        } else if (passwordValue.length < 6) {
            setError(passwordField, "Password must be at least 6 characters");
            isValid = false;
        } else {
            setSuccess(passwordField, "Password looks good");
        }

        return isValid;
    }

    // Login Form Redirect
    document.getElementById("signin-form").addEventListener("submit", function (event) {
        event.preventDefault();
        window.location.href = "homePage2.html";
    });

    // Logo animation and homepage transition
    setTimeout(() => {
        const logoContainer = document.querySelector(".logo-container");
        const homepage = document.querySelector(".homepage");

        if (logoContainer) logoContainer.style.display = "none";
        if (homepage) {
            homepage.style.display = "block";
            setTimeout(() => {
                homepage.style.opacity = "1"; // Fade-in effect
            }, 100);
        }
    }, 2000); // Same duration as logo animation
});
