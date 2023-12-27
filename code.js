// Form Input Validation
const form = document.getElementById("main-form");
const emailInput = document.querySelector(".email-input");
const invalidEmailMessage = document.querySelector(".invalid-email-msg");
const emailSubmited = document.getElementById("email-submited-span");
const successMessage = document.querySelector(".success-msg-section-container");
const body = document.querySelector("body");
const dismissButton = document.getElementById("dismiss-btn");

form.addEventListener("submit", (e) =>
{
    e.preventDefault();
    const email = emailInput.value.trim();

    if (!isValidEmail(email)) 
    {
        invalidEmailMessage.classList.add("invalid-email-msg-active");
        emailInput.classList.add("input-invalid-email");
    }else{
        invalidEmailMessage.classList.remove("invalid-email-msg-active");
        emailInput.classList.remove("input-invalid-email");

        emailSubmited.textContent = `${email}`;
        successMessage.classList.add("success-msg-active");
        body.classList.add("body-inactive");
    }
});

dismissButton.addEventListener("click", ()=>{
    invalidEmailMessage.classList.remove("invalid-email-msg-active");
    emailInput.classList.remove("input-invalid-email");
    successMessage.classList.remove("success-msg-active");
    body.classList.remove("body-inactive");
})

function isValidEmail(email) 
{
    // Use a regular expression to validate the email format.
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
}
// Form Input Validation
