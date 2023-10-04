const createbutton = document.querySelector(".create-button");
const ageError = document.querySelector(".age-error-div");

//bday
let age;
let birthDateInput;

//To set the Maximum set of date
const bdayInput = document.getElementById("birthdate-input");
let maxYear = new Date().getFullYear() - 18;
let maxDay = new Date().getDate();
let maxMonth = new Date().getMonth() + 1;
let maxBdayInput = `${maxYear}-${maxMonth.toString().padStart(2, "0")}-${maxDay
  .toString()
  .padStart(2, "0")}`;
console.log(maxBdayInput);
console.log(typeof maxBdayInput);
bdayInput.max = maxBdayInput;

// For Birthdate Min and Max

const ageDisplay = document.querySelector(".input-age");

function calculateAge() {
  birthDateInput = document.getElementById("birthdate-input").value;
  let bDay = new Date(birthDateInput);
  let currentDate = new Date();

  // Calculate the difference in years
  let age = currentDate.getFullYear() - bDay.getFullYear();

  // Check if the current date's month and day are before the birthdate's month and day
  if (
    currentDate.getMonth() < bDay.getMonth() ||
    (currentDate.getMonth() === bDay.getMonth() &&
      currentDate.getDate() < bDay.getDate())
  ) {
    age--;
  }

  ageDisplay.value = `${age || ""}`;
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

  signupForm.classList.add("hide");
  loginForm.classList.add("hide");
  viewSummaryContainer.classList.add("hide");
  successCreate.classList.remove("hide");
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

//For View Summary
function viewSummary() {
  // Document Query Selector of Each Input in Registration Form

  //For Full Name
  const firstName = document.querySelector("#first-name-input").value;
  const lastName = document.querySelector("#last-name-input").value;
  const middleInitial = document.querySelector("#middle-intial-input").value;
  const fullNameSummaryDiv = document.querySelector(".full-name-summary");

  let fullname;
  if (!firstName || !lastName || !middleInitial) {
    fullname = "";
  } else {
    fullname = `${firstName} ${middleInitial}. ${lastName}`;
  }

  //For Username
  const username = document.querySelector("#username-input").value;
  const usernameSummaryDiv = document.querySelector(".username-summary");

  //For nickname
  const nickname = document.querySelector("#nickname-input").value;
  const nicknameSummaryDiv = document.querySelector(".nickname-summary");

  //For Email
  const emailAddress = document.querySelector("#emailaddress-input").value;
  const emailSummaryDiv = document.querySelector(".email-summary");

  //For Birthdate
  const birthdateSummaryDiv = document.querySelector(".birthdate-summary");

  //For Age
  const ageSummaryDiv = document.querySelector(".age-summary");
  let agetemp;
  if (age) {
    agetemp = `${age} years old`;
  }

  //For Birthplace
  const birthplace = document.querySelector("#birthplace-input").value;
  const birthplaceSummaryDiv = document.querySelector(".birthplace-summary");

  //For Gender
  const gender = document.querySelector("#gender-input").value;
  const genderSummaryDiv = document.querySelector(".gender-summary");

  //For Civil Status
  const civilStatus = document.querySelector("#civilstatus-input").value;
  const civilSummaryDiv = document.querySelector(".civil-summary");

  //For Phone Number
  const phonenumber = document.querySelector("#phonenumber-input").value;
  const phonenumSummaryDiv = document.querySelector(".phonenum-summary");

  //For Landline
  const landline = document.querySelector("#landline-input").value;
  const landlineSummaryDiv = document.querySelector(".landline-summary");

  //For Address
  const address = document.querySelector("#address-input").value;
  const addressSummaryDiv = document.querySelector(".address-summary");

  //For Father's Information
  const FfirstName = document.querySelector("#Ffirst-name-input").value;
  const FlastName = document.querySelector("#Flast-name-input").value;
  const FmiddleInitial = document.querySelector("#Fmiddle-intial-input").value;
  const FFullnameSummaryDiv = document.querySelector(
    ".father-full-name-summary"
  );

  let Ffullname;
  if (!FfirstName || !FlastName || !FmiddleInitial) {
    Ffullname = "";
  } else {
    Ffullname = `${FfirstName} ${FlastName}. ${FmiddleInitial}`;
  }

  const Foccupation = document.querySelector("#Foccupation").value;
  const FoccupationSummaryDiv = document.querySelector(".foccupation-summary ");

  const MfirstName = document.querySelector("#Mfirst-name-input").value;
  const MlastName = document.querySelector("#Mlast-name-input").value;
  const MmiddleInitial = document.querySelector("#Mmiddle-intial-input").value;

  const MFullnameSummaryDiv = document.querySelector(
    ".mother-full-name-summary"
  );
  let Mfullname;
  if (!MfirstName || !MlastName || !MmiddleInitial) {
    Mfullname = "";
  } else {
    Mfullname = `${MfirstName} ${MmiddleInitial}. ${MlastName}`;
  }

  const Moccupation = document.querySelector("#Moccupation").value;
  const MoccupationSummaryDiv = document.querySelector(".moccupation-summary");

  loginForm.classList.add("hide");
  signupForm.classList.add("hide");
  viewSummaryContainer.classList.remove("hide");

  fullNameSummaryDiv.textContent = `${fullname || "N/A"}`;
  usernameSummaryDiv.textContent = `${username || "N/A"}`;
  nicknameSummaryDiv.textContent = `${nickname || "N/A"}`;
  emailSummaryDiv.textContent = `${emailAddress || "N/A"}`;
  birthdateSummaryDiv.textContent = `${birthDateInput || "N/A"}`;
  ageSummaryDiv.textContent = `${agetemp || "N/A"}`;
  birthplaceSummaryDiv.textContent = `${birthplace || "N/A"}`;
  genderSummaryDiv.textContent = `${gender || "N/A"}`;
  civilSummaryDiv.textContent = `${civilStatus || "N/A"}`;
  phonenumSummaryDiv.textContent = `${phonenumber || "N/A"}`;
  landlineSummaryDiv.textContent = `${landline || "N/A"}`;
  addressSummaryDiv.textContent = `${address || "N/A"}`;
  FFullnameSummaryDiv.textContent = `${Ffullname || "N/A"}`;
  FoccupationSummaryDiv.textContent = `${Foccupation || "N/A"}`;
  MFullnameSummaryDiv.textContent = `${Mfullname || "N/A"}`;
  MoccupationSummaryDiv.textContent = `${Moccupation || "N/A"}`;
}

function exitSummary() {
  loginForm.classList.add("hide");
  signupForm.classList.remove("hide");
  viewSummaryContainer.classList.add("hide");
}
