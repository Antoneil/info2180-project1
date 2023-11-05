/* Add your JavaScript to this file */

document.addEventListener("DOMContentLoaded", function () {
  const newsletterForm = document.querySelector("form");
  const messageDiv = document.querySelector(".message");

  newsletterForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const emailInput = newsletterForm.querySelector('input[type="email"]');
    const email = emailInput.value;

    if (email.trim() !== "" && validateEmail(email)) {
      messageDiv.textContent = `Thank you! Your email address ${email} has been added to our mailing list!`;
      emailInput.value = "";
    } else {
      messageDiv.textContent = "Please enter a valid email address.";
    }
  });

  function validateEmail(email) {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return regex.test(email);
  }
});
