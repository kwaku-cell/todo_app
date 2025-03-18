document.addEventListener("DOMContentLoaded", () => {
    const sliderImage = document.getElementById("slider-image");
    const images = [
        "ai-nuclear-energy-future-innovation-disruptive-technology.jpg",
        "ai-nuclear-energy-future-innovation-disruptive-technology.jpg",
        "ai-nuclear-energy-future-innovation-disruptive-technology.jpg",
        "ai-nuclear-energy-future-innovation-disruptive-technology.jpg",
        "ai-nuclear-energy-future-innovation-disruptive-technology.jpg",
    ];
    let currentIndex = 0;

    // Image Slider Logic
    setInterval(() => {
        currentIndex = (currentIndex + 1) % images.length;
        sliderImage.src = images[currentIndex];
    }, 10000);

    const toggleLink = document.getElementById("toggle-link");
    const toggleAnchor = toggleLink.querySelector("a"); // Selects the <a> inside <p>
    const formTitle = document.getElementById("form-title");
    const formAction = document.getElementById("form-action");
    const loginFields = document.getElementById("login-fields");
    const signupFields = document.getElementById("signup-fields");
    const authForm = document.getElementById("auth-form");


    function toggleForm() {
        if (formAction.value === "login") {
            // Switch to Sign-Up
            formAction.value = "register";
            formTitle.textContent = "Sign Up";
            loginFields.style.display = "none";
            signupFields.style.display = "block";
            Array.from(signupFields.querySelectorAll("input")).forEach(input => input.disabled = false);
            Array.from(loginFields.querySelectorAll("input")).forEach(input => input.disabled = true);

            // Update toggle link text
            toggleLink.firstChild.textContent = "Already have an account? ";
            toggleAnchor.textContent = "Log In";
        } else {
            // Switch to Login
            formAction.value = "login";
            formTitle.textContent = "Log In";
            loginFields.style.display = "block";
            signupFields.style.display = "none";
            Array.from(loginFields.querySelectorAll("input")).forEach(input => input.disabled = false);
            Array.from(signupFields.querySelectorAll("input")).forEach(input => input.disabled = true);

            // Update toggle link text
            toggleLink.firstChild.textContent = "Don’t have an account? ";
            toggleAnchor.textContent = "Sign Up";
        }
    }

    // Attach event listener directly to the <a> inside the <p>
    toggleAnchor.addEventListener("click", (e) => {
        e.preventDefault();
        toggleForm();
    });



    // Password Strength Checker (Only for Sign-Up)
    const signupPasswordField = document.getElementById("signup-password");
    const strengthIndicator = document.getElementById("password-strength");

    signupPasswordField?.addEventListener("input", () => {
        if (formAction.value === "register") {
            const password = signupPasswordField.value;
            let strength = "Weak";
            if (password.length >= 8 && /[A-Z]/.test(password) && /\d/.test(password) && /[@$!%*?&]/.test(password)) {
                strength = "Strong";
            } else if (password.length >= 6 && (/[A-Z]/.test(password) || /\d/.test(password) || /[@$!%*?&]/.test(password))) {
                strength = "Medium";
            }
            strengthIndicator.textContent = `Password strength: ${strength}`;
            strengthIndicator.style.color =
                strength === "Strong" ? "green" :
                strength === "Medium" ? "orange" : "red";
            strengthIndicator.style.display = "block";
        } else {
            strengthIndicator.style.display = "none";
        }
    });

    // Validate Confirm Password (Only for Sign-Up)
    const confirmPasswordField = document.getElementById("confirm-password");
    confirmPasswordField?.addEventListener("input", () => {
        if (signupPasswordField.value !== confirmPasswordField.value) {
            confirmPasswordField.setCustomValidity("Passwords do not match!");
        } else {
            confirmPasswordField.setCustomValidity("");
        }
    });

    // Form Submission Validation
    authForm.addEventListener("submit", (e) => {
        if (formAction.value === "register") {
            const signupEmailField = document.getElementById("signup-email");
            if (signupEmailField.value === "" || signupPasswordField.value === "" || confirmPasswordField.value === "") {
                e.preventDefault();
                alert("All fields are required for Sign-Up!");
            } else if (signupPasswordField.value !== confirmPasswordField.value) {
                e.preventDefault();
                alert("Passwords do not match!");
            }
        } else if (formAction.value === "login") {
            const loginEmailField = document.getElementById("login-email");
            const loginPasswordField = document.getElementById("login-password");

            if (loginEmailField.value === "" || loginPasswordField.value === "") {
                e.preventDefault();
                alert("Please fill in all fields for Login!");
            }
        }
    });
});
