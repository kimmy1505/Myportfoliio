document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault(); 

        const username = document.getElementById("username").value.trim();
        const password = document.getElementById("password").value.trim();
        const errorMessage = document.getElementById("error-message");

        if (username === "" || password === "") {
            errorMessage.textContent = "Both fields are required!";
        } else {
            errorMessage.textContent = "";
            alert("Login Successful!");
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
    const formContainer = document.getElementById("form-container");
    const submittedData = document.getElementById("submitted-data");
    const backButton = document.getElementById("backButton");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const firstName = document.getElementById("firstName").value.trim();
        const lastName = document.getElementById("lastName").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (!firstName || !lastName || !email || !message) {
            alert("All fields are required.");
            return;
        }

        const confirmSubmit = confirm("Do you want to submit the form?");
        if (!confirmSubmit) {
            return; 
        }

        document.getElementById("displayFirstName").textContent = firstName;
        document.getElementById("displayLastName").textContent = lastName;
        document.getElementById("displayEmail").textContent = email;
        document.getElementById("displayMessage").textContent = message;
        document.getElementById("summary").textContent = `You, ${firstName} ${lastName}, have submitted a message saying: "${message}". We will contact you at ${email}.`;

        formContainer.style.display = "none";
        submittedData.style.display = "block";
    });

    backButton.addEventListener("click", function () {
        form.reset();
        formContainer.style.display = "block";
        submittedData.style.display = "none";
    });
});