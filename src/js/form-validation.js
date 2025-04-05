document.addEventListener("DOMContentLoaded", () => {
  const submitBtn = document.querySelector("[data-key='submit']");
  const contactForm = document.querySelector("[data-key='form']");
  const contactMsg = contactForm.querySelector("[data-key='contact-msg']");

  submitBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const userData = {
      name: contactForm.querySelector("#name").value.trim(),
      lastName: contactForm.querySelector("#surname").value.trim(),
      email: contactForm.querySelector("#email").value.trim(),
      message: contactForm.querySelector("#message").value.trim(),
    };

    if (validateContactForm(userData)) {
      sendEmail(userData);
    }
  });

  function validateContactForm({ name, lastName, email, message }) {
    if (!name || !lastName || !email || !message) {
      showMessage("All fields are required", "red");
      return false;
    }

    const emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.match(emailFormat)) {
      showMessage("Please enter a valid email address", "red");
      return false;
    }

    return true;
  }

  function showMessage(text, color) {
    contactMsg.innerHTML = text;
    contactMsg.style.color = color;
  }

  function sendEmail(userData) {
    submitBtn.innerText = "Sending...";
    submitBtn.disabled = true;

    fetch("/src/php/send-email.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams(userData),
    })
      .then((response) => response.text())
      .then((data) => {
        if (data.trim() === "success") {
          showMessage("The form has been sent successfully!", "green");
          contactForm.reset();
        } else {
          showMessage("Error sending email. Please try again.", "red");
        }
      })
      .catch((error) => {
        showMessage("Network error. Please try again later.", "red");
      })
      .finally(() => {
        submitBtn.innerText = "Submit";
        submitBtn.disabled = false;
      });
  }
});