const createbutton = document.querySelector(".create-button");

let status;

createbutton.addEventListener("click", () => {
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


