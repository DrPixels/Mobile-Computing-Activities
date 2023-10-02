const createbutton = document.querySelector(".create-button");

// For Birthdate Min and Max

let birthDateInput = document.getElementById("bdate");

// For Current Date
// let dateObj = new Date();
// let month = dateObj.getUTCMonth() + 1;
// let date = dateObj.getUTCDate();
// let year = dateObj.getUTCFullYear();

// //For User's Birthdate
// let dateObj = new Date();
// let month = dateObj.getUTCMonth() + 1;
// let date = dateObj.getUTCDate();
// let year = dateObj.getUTCFullYear();

// let newdate = year + "-" + month + "-" + date.toString().padStart(2, "0");
// console.log(newdate);
// birthDateInput.max = newdate.toString();

// For Password Checking
let status;

createbutton.addEventListener("click", () => {
  console.log(birthDate.value);
  //For Password
  const password = document.querySelector(".password").value;
  const passwordStatus = document.querySelector(".password-status");
  const confirmpassword = document.querySelector(".confirm-password").value;
  console.log(password);
  if (password != confirmpassword) {
    clearInterval(status);
    passwordStatus.innerHTML = `<i class="fa-solid fa-triangle-exclamation fa-lg"></i> Password are not the same. Please try again.`;
    status = setTimeout(() => {
      passwordStatus.innerHTML = "";
    }, 2000);
  }
});

// // For Age
// let age;
// function computeAge () {
//     const ageValue = document.querySelector(".input-age");
// }

//For the Login and Signup Popup
const loginForm = document.querySelector(".login-main-container");
const signupForm = document.querySelector(".main-container");

const signupnowButton = document.querySelector("#signupnow");
signupnowButton.addEventListener("click", () => {
  loginForm.classList.add("hide");
  signupForm.classList.remove("hide");
});

// function logIn() {
//   loginForm.classList.add("open-popup");
//   signupForm.classList.remove("open-popup");
// }
