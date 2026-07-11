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

form.addEventListener("submit", function (event) {

    event.preventDefault();

    let isvalid = true;


    errorMessage.textContent = "";
    successMessage.textContent = "";

    errorMessage.classList.remove("failure");
    successMessage.classList.remove("success");

    if (!firstnameRegex.test(firstname.value.trim())) {
        isvalid = false;
    }

    if (!lastnameRegex.test(lastname.value.trim())) {
        isvalid = false;
    }

    if (!emailRegex.test(email.value.trim())) {
        isvalid = false;
    }

    if (!numberRegex.test(number.value.trim())) {
        isvalid = false;
    }

    if (subject.value === "Select a topic") {
        isvalid = false;
    }

    if (message.value.trim() === "") {
        isvalid = false;
    }

    if (isvalid) {

        successMessage.textContent =
            "✅ Thank you! Your message has been sent. We'll reply within 24 hours.";

        successMessage.classList.add("success");

        form.reset();

    } else {

        errorMessage.textContent =
            "Please fill in all required fields correctly.";

        errorMessage.classList.add("failure");
    }

});



button.addEventListener("click", function () {

    button.style.backgroundColor = "blue";

    setTimeout(() => {
        button.style.backgroundColor = "red";
    }, 1000);

});


//common questions creating
let faqContainer = document.getElementById("faqContainer");

let faqData = [
    {
        question: "How long does delivery take?",
        answer: "Standard delivery typically takes 3–5 business days,Express delivery is avilable at checkout for next-day delivery."
    },
    {
        question: "Can I return a product?",
        answer: "Yes! We offer a 30-day hassle-free return policy on all products. Just contact us and we'll arrange a pickup."
    },
    {
        question: "Are the products genuine?",
        answer: "Absolutely. All products are sourced directly from verified manufacturers and authorized distributors. We guarantee 100% authenticity."
    },
    {
        question: "What payment methods are accepted?",
        answer: "We accept UPI, credit/debit cards, net banking, EMI, and cash on delivery for eligible orders"
    }
];

faqData.forEach(function (item) {

    faqContainer.innerHTML += `
        <div class="faq-item border rounded-3 mb-3 bg-white shadow-sm text-start">
            <button class="faq-question w-100 d-flex justify-content-between align-items-center p-3 fw-semibold border-0 shadow-none">
                <span>${item.question}</span>
                <i class="bi bi-chevron-down"></i>
            </button>

            <div class="faq-answer px-3 pb-3 text-secondary" style="display:none;">
                ${item.answer}
            </div>
        </div>
    `;
});

//FAQ Open & Close
let questions = document.querySelectorAll(".faq-question");

questions.forEach(function(question){

    question.addEventListener("click", function(){

        let answer = this.nextElementSibling;
        let icon = this.querySelector("i");

        questions.forEach(function(item){

            if(item !== question){

                item.nextElementSibling.style.display = "none";
                item.classList.remove("active");

                let icon = item.querySelector("i");
                icon.classList.remove("bi-chevron-up");
                icon.classList.add("bi-chevron-down");
            }

        });

        if(answer.style.display === "block"){

            answer.style.display = "none";
            this.classList.remove("active");

            let icon = this.querySelector("i");
            icon.classList.remove("bi-chevron-up");
            icon.classList.add("bi-chevron-down");

        }else{

            answer.style.display = "block";
            this.classList.add("active");

            let icon = this.querySelector("i");
            icon.classList.remove("bi-chevron-down");
            icon.classList.add("bi-chevron-up");

        }

    });

});