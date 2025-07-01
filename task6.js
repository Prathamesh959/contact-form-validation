let form = document.querySelector("#contactForm");
let nameInput = document.querySelector("#name");
let emailInput = document.querySelector("#email");
let messageInput = document.querySelector("#message");

let nameError = document.querySelector("#nameError");
let emailError = document.querySelector("#emailError");
let messageError = document.querySelector("#messageError");
let successMsg = document.querySelector("#successMsg");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let nameVal = nameInput.value.trim();
    let emailVal = emailInput.value.trim();
    let messageVal = messageInput.value.trim();

    let isValid = true;

    nameError.innerText = "";
    emailError.innerText = "";
    messageError.innerText = "";
    successMsg.innerText = "";

    if (nameVal === "") {
        nameError.innerText = "Name is required";
        isValid = false;
    }

    if (emailVal === "") {
        emailError.innerText = "Email is required";
        isValid = false;
    } else {
        let pattern = /^\S+@\S+\.\S+$/;
        if (!pattern.test(emailVal)) {
            emailError.innerText = "Invalid email";
            isValid = false;
        }
    }

    if (messageVal === "") {
        messageError.innerText = "Message is required";
        isValid = false;
    }

    if (isValid) {
        successMsg.innerText = "Form submitted successfully!";
        form.reset();
    }
});
