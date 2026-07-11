// Send Us a Message Form

let firstname = document.getElementById("firstname");
let lastname = document.getElementById("lastname");
let email = document.getElementById("email");
let number = document.getElementById("number");
let subject = document.getElementById("subject");
let message = document.getElementById("message");

let errorMessage = document.getElementById("errorMessage");
let successMessage = document.getElementById("successMessage");
let form = document.getElementById("myform");

// Regular Expressions

let firstnameRegex = /^[A-Za-z ]+$/;
let lastnameRegex = /^[A-Za-z ]+$/;
let numberRegex = /^[6-9][0-9]{9}$/;
let emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

form.addEventListener("submit", function(event){

    event.preventDefault();

    let isvalid = true;

    
    errorMessage.textContent = "";
    successMessage.textContent = "";

    errorMessage.classList.remove("failure");
    successMessage.classList.remove("success");

    if(!firstnameRegex.test(firstname.value.trim())){
        isvalid = false;
    }

    if(!lastnameRegex.test(lastname.value.trim())){
        isvalid = false;
    }

    if(!emailRegex.test(email.value.trim())){
        isvalid = false;
    }

    if(!numberRegex.test(number.value.trim())){
        isvalid = false;
    }

    if(subject.value === "Select a topic"){
        isvalid = false;
    }

    if(message.value.trim() === ""){
        isvalid = false;
    }

    if(isvalid){

        successMessage.textContent =
        "✅ Thank you! Your message has been sent. We'll reply within 24 hours.";

        successMessage.classList.add("success");

        form.reset();

    }else{

        errorMessage.textContent =
        "Please fill in all required fields correctly.";

        errorMessage.classList.add("failure");
    }

});


