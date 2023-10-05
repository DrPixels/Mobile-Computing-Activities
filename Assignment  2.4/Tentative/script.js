const createbutton = document.querySelector(".create-button");
const ageError = document.querySelector(".age-error-div");
const password = document.querySelector(".password");
const confirmpassword = document.querySelector(".confirm-password");
const username = document.querySelector("#username-input");
const emailAddress = document.querySelector("#emailaddress-input");

const phonenumber = document.querySelector(".phonenumber-input");
const telephone = document.querySelector(".telephone-input");

const accountdetails = [];

const ageDisplay = document.querySelector(".input-age");

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
bdayInput.max = maxBdayInput;

// For Birthdate Min and Max

function calculateAge() {
  birthDateInput = document.getElementById("birthdate-input").value;
  let bDay = new Date(birthDateInput);
  let currentDate = new Date();

  // Calculate the difference in years
  age = currentDate.getFullYear() - bDay.getFullYear();

  // Check if the current date's month and day are before the birthdate's month and day
  if (
    currentDate.getMonth() < bDay.getMonth() ||
    (currentDate.getMonth() === bDay.getMonth() &&
      currentDate.getDate() < bDay.getDate())
  ) {
    age--;
  }

  ageDisplay.value = age || null;
}

//For the Login and Signup Popup
const loginForm = document.querySelector(".login-main-container");
const loginFormPage = document.querySelector(".login-form");
const signupForm = document.querySelector(".main-container");
const signupFormPage = document.querySelector(".signup-form-page");
const viewSummaryContainer = document.querySelector(
  ".view-summary-maincontainer"
);
const successCreate = document.querySelector(".success-create-acc");

const createAccButton = document.querySelector(".create-button");

function createAcc(event) {
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
  if (phonenumber.value == "" && telephone.value == "") {
    phonenumber.setCustomValidity("Enter at least one contact number.");
    telephone.setCustomValidity("Enter at least one contact number.");
    return;
  } else {
    phonenumber.setCustomValidity("");
    telephone.setCustomValidity("");
  }

  if (signupFormPage.checkValidity()) {
    event.preventDefault();
    accountdetails.push({
      username: username.value,
      emailAddress: emailAddress.value,
      password: password.value,
    });
    signupFormPage.reset();
    signupForm.classList.add("hide");
    loginForm.classList.add("hide");
    viewSummaryContainer.classList.add("hide");
    successCreate.classList.remove("hide");
  }
}

function signUp() {
  loginForm.classList.add("hide");
  signupForm.classList.remove("hide");
  viewSummaryContainer.classList.add("hide");
  document.title = "Account Sign In";
}

function logIn() {
  loginForm.classList.remove("hide");
  signupForm.classList.add("hide");
  viewSummaryContainer.classList.add("hide");
}

function loginNow() {
  signupForm.classList.add("hide");
  loginForm.classList.remove("hide");
  viewSummaryContainer.classList.add("hide");
  successCreate.classList.add("hide");
}

function verifyLogin(event) {
  if (loginFormPage.checkValidity()) {
    event.preventDefault();
    const emailuserLogin = document.querySelector("#email-user-login").value;
    const passLogin = document.querySelector("#pass-login").value;

    if (!accountdetails.length) {
      alert("Incorrect Credentials. Please try again");
      loginFormPage.reset();
      return;
    }
    for (let i = 0; i < accountdetails.length; i++) {
      if (
        emailuserLogin == accountdetails[i].username ||
        emailuserLogin == accountdetails[i].emailAddress
      ) {
        if (passLogin == accountdetails[i].password) {
          alert("Successful Log In. Thank you.");
          loginFormPage.reset();
        } else {
          alert("Incorrect Password. Please try again.");
          loginFormPage.reset();
        }
      } else if (
        emailuserLogin !== accountdetails[i].username &&
        emailuserLogin !== accountdetails[i].emailAddress
      ) {
        alert("Incorrect Credentials. Please try again");
        loginFormPage.reset();

        return;
      }
    }
  }
}

//For View Summary
function viewSummary() {
  document.title = "Account Summary";
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
  const usernameSummaryDiv = document.querySelector(".username-summary");

  //For nickname
  const nickname = document.querySelector("#nickname-input").value;
  const nicknameSummaryDiv = document.querySelector(".nickname-summary");

  //For Email
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
    Ffullname = `${FfirstName} ${FmiddleInitial}. ${FlastName}`;
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
  usernameSummaryDiv.textContent = `${username.value || "N/A"}`;
  nicknameSummaryDiv.textContent = `${nickname || "N/A"}`;
  emailSummaryDiv.textContent = `${emailAddress.value || "N/A"}`;
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
  document.title = "Account Sign In";
  loginForm.classList.add("hide");
  signupForm.classList.remove("hide");
  viewSummaryContainer.classList.add("hide");
}
