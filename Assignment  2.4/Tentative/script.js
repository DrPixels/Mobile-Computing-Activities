const createbutton = document.querySelector(".create-button");
const ageError = document.querySelector(".age-error-div");

//bday
let age;
let birthDateInput;

// For Birthdate Min and Max

const ageDisplay = document.querySelector(".input-age");

function calculateAge() {
  birthDateInput = document.getElementById("birthdate-input").value;
  let bDay = +new Date(birthDateInput);

  age = Math.floor((Date.now() - bDay) / 31556952000);
  if (age < 0) {
    age = 0;
    ageDisplay.value = 0;
    return;
  }

  ageDisplay.value = age;
}

//For the Login and Signup Popup
const loginForm = document.querySelector(".login-main-container");
const signupForm = document.querySelector(".main-container");
const viewSummaryContainer = document.querySelector(
  ".view-summary-maincontainer"
);
const successCreate = document.querySelector(".success-create-acc");
// For Password Checking
let status;

function createAccount() {
  const password = document.querySelector(".password");
  const confirmpassword = document.querySelector(".confirm-password");

  //For Telephone
  const phonenumber = document.querySelector(".phonenumber-input");
  const telephone = document.querySelector(".telephone-input");

  if (
    password.value !== confirmpassword.value &&
    password.value !== "" &&
    confirmpassword.value !== ""
  ) {
    confirmpassword.setCustomValidity(
      "Passwords are not the same. Please check and try again."
    );
    return;
  } else {
    confirmpassword.setCustomValidity("");
  }

  if (age < 18) {
    ageError.classList.remove("hide");
    const ageErrorInterval = setTimeout(() => {
      ageError.classList.add("hide");
    }, 1000);
    return;
  }

  if (phonenumber.value == "" && telephone.value == "") {
    phonenumber.setCustomValidity("Enter at least one contact number.");
    telephone.setCustomValidity("Enter at least one contact number.");
    return;
  } else {
    phonenumber.setCustomValidity("");
    telephone.setCustomValidity("");
  }

  if (age < 18) {
    event.preventDefault();
    return;
  }

  if (signupForm.checkValidity()) {
    signupForm.classList.add("hide");
    loginForm.classList.add("hide");
    successCreate.classList.remove("hide");
  }
}

function signUp() {
  loginForm.classList.add("hide");
  signupForm.classList.remove("hide");
  viewSummaryContainer.classList.add("hide");
}

function logIn() {
  loginForm.classList.remove("hide");
  signupForm.classList.add("hide");
  viewSummaryContainer.classList.add("hide");
}

function logInNow() {
  loginForm.classList.remove("hide");
  signupForm.classList.add("hide");
  viewSummaryContainer.classList.add("hide");
  successCreate.classList.add("hide");
}

//For View Summary
function viewSummary() {
  // Document Query Selector of Each Input in Registration Form
  const firstName = document.querySelector("#first-name-input").value;
  const lastName = document.querySelector("#last-name-input").value;
  const middleInitial = document.querySelector("#middle-intial-input").value;
  const username = document.querySelector("#username-input").value;
  const nickname = document.querySelector("#nickname-input").value;
  const emailAddress = document.querySelector("#emailaddress-input").value;

  const birthplace = document.querySelector("#birthplace-input").value;
  const gender = document.querySelector("#gender-input").value;
  const civilStatus = document.querySelector("#civilstatus-input").value;
  const phonenumber = document.querySelector("#phonenumber-input").value;
  const landline = document.querySelector("#landline-input").value;
  const address = document.querySelector("#address-input").value;

  const FfirstName = document.querySelector("#Ffirst-name-input").value;
  const FlastName = document.querySelector("#Flast-name-input").value;
  const FmiddleInitial = document.querySelector("#Fmiddle-intial-input").value;
  const Foccupation = document.querySelector("#Foccupation").value;

  const MfirstName = document.querySelector("#Mfirst-name-input").value;
  const MlastName = document.querySelector("#Mlast-name-input").value;
  const MmiddleInitial = document.querySelector("#Mmiddle-intial-input").value;
  const Moccupation = document.querySelector("#Moccupation").value;

  loginForm.classList.add("hide");
  signupForm.classList.add("hide");
  viewSummaryContainer.classList.remove("hide");

  const informationSummaryPar = document.querySelector(
    ".information-summary-p"
  );
  informationSummaryPar.innerHTML = `--- <b>ACCOUNT LOG IN DETAILS</b> --- <br/> <b>Full Name</b>: ${firstName} ${middleInitial}. ${lastName} <br/> <b>Username:</b> ${username} <br/> <b>Nickname:</b> ${nickname} <br/> <b>Email Address:</b> ${emailAddress} <br/> <br/> --- <b>PERSONAL DETAILS</b> --- <br/> <b>Birthdate:</b> ${
    birthDateInput || ""
  } <br/> <b>Age:</b> ${
    age || "unknown"
  } years old <br/> <b>Birthplace:</b> ${birthplace} <br/> <b>Gender:</b> ${gender} <br/> <b>Civil Status:</b> ${civilStatus} <br/> <b>Phone Number:</b> ${phonenumber} <br/> <b>Landline:</b> ${landline} <br/> <b>Address:</b> ${address} <br/> <br/> --- <b>PARENTS DETAILS</b> --- <br/> <b>Father's Full Name:</b> ${FfirstName} ${FmiddleInitial}. ${FlastName} <br/> <b>Father's Occupation:</b> ${Foccupation} <br/><br/> <b>Mother's Full Name:</b> ${MfirstName} ${MmiddleInitial}. ${MlastName} <br/> <b>Mother's Occupation:</b> ${Moccupation}`;
}

function exitSummary() {
  loginForm.classList.add("hide");
  signupForm.classList.remove("hide");
  viewSummaryContainer.classList.add("hide");
}
