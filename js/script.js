let emailInput = document.getElementById("email-input");
let submitBtn = document.getElementById("submit");
let errorIcon = document.getElementById("errorIcon");
let errorMessage = document.getElementById("errorMessage");

const emailFormat = new RegExp("^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$");

// When the "Submit" button is clicked.
submitBtn.addEventListener("click", function(){
    
    // Get the email value.
    var email = emailInput.value;

    // Check the format of the email value.
    var valid = emailFormat.test(email);

    // If the format is valid, simply empty the value in the input field.
    if(valid){

        // Empty the value.
        emailInput.value = null;

        // Remove the class.
        emailInput.classList.remove("invalid-email");
        errorIcon.classList.remove("show-error");
        errorMessage.classList.remove("show-error");

    } else { // Else, show error message.

        // Add the class
        emailInput.classList.add("invalid-email");
        errorIcon.classList.add("show-error");
        errorMessage.classList.add("show-error");

    }
});