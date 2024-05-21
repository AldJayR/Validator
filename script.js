const telephoneInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const resultText = document.getElementById("results-div");

const isValidInput = () => {
  if (telephoneInput.value === '') {
    alert("Please provide a phone number");
    telephoneInput.value = '';
    return false;
  }
  return true;
}

const numberValidation = () => {

  const phoneNumber = telephoneInput.value;
  const phoneRegex =  /^(\+?1\s?)?(\(\d{3}\)|\d{3})[\s-]?\d{3}[\s-]?\d{4}$/;

  return phoneRegex.test(phoneNumber);
}


checkBtn.addEventListener("click", () => {

  if (!isValidInput()) {
    return;
  }

  resultText.textContent = (numberValidation() ? `Valid US number: ${telephoneInput.value}` : `Invalid US Number: ${telephoneInput.value}`);
});

clearBtn.addEventListener("click", () => {
  resultText.textContent  = '';
  telephoneInput.value = '';
})
