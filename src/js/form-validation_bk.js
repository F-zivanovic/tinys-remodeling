// Form validation
const sumbitBtn = document.querySelector("[data-key='submit']");
const contactForm = document.querySelector("[data-key='form']");
const contactMsg = contactForm.querySelector("[data-key='contact-msg']");

sumbitBtn.addEventListener("click", collectUserData);

function collectUserData(e) {
  e.preventDefault();

  const inputs = contactForm.querySelectorAll("input");
  const textarea = contactForm.querySelector("textarea");

  const userData = {
    name: inputs[0].value,
    lastName: inputs[1].value,
    email: inputs[2].value,
    message: textarea.value,
  };

  validateContactForm(userData);
}

function validateContactForm(userData) {
  if (
    userData.name == "" ||
    userData.lastName == "" ||
    userData.email == "" ||
    userData.message == ""
  ) {
    contactMsg.innerHTML = "All fields are required";
    return;
  }

  let emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!userData.email.match(emailFormat)) {
    contactMsg.innerHTML = "Unesite validan email";
  } else {
    contactMsg.innerHTML = "The form has benn successfully sent";
    // userData.name.value == "";
    // userData.lastName.value == "";
    // userData.email.value == "";
    // userData.message.value == "";
  }
}
