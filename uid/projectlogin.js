
        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const phone = document.getElementById('phone');
        const password = document.getElementById('password');
        const age = document.getElementById('age');
        const form = document.querySelector('form');

        form.addEventListener('submit', function (e) {
            e.preventDefault();
            validateInput();
        });

        function setError(element, message) {
            const errorDisplay = element.nextElementSibling; 
            errorDisplay.innerText = message; 
            element.classList.add('error'); 
            element.classList.remove('success');
        }

        function setSuccess(element) {
            const errorDisplay = element.nextElementSibling;
            errorDisplay.innerText = "";
            element.classList.add('success'); 
            element.classList.remove('error'); 
        }

        function validateInput() {
            const nameValue = name.value.trim();
            const emailValue = email.value.trim();
            const phoneValue = phone.value.trim();
            const passwordValue = password.value.trim();
            const ageValue = age.value.trim();

            if (nameValue === "") {
                setError(name, 'Name is required');
            } else {
                setSuccess(name);
            }

            if (!emailValue.includes("@") || !emailValue.includes(".")) {
                setError(email, "Invalid email format");
            } else if (emailValue === "") {
                setError(email, "Email is required");
            } else {
                setSuccess(email);
            }

            if (phoneValue === "") {
                setError(phone, "Phone number is required");
            } else if (isNaN(phoneValue)) {
                setError(phone, "Phone number must be numeric");
            } else {
                setSuccess(phone);
            }

            if (passwordValue === "") {
                setError(password, "Password is required");
            } else {
                setSuccess(password);
            }

            if (ageValue === "") {
                setError(age, "Age is required");
            } else if (parseInt(ageValue) <= 5) {
                setError(age, "You must be at least 6 years old");
            } else {
                setSuccess(age);
            }
        }