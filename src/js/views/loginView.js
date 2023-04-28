class LoginView {
  overlayContainer = document.querySelector(".overlay");
  loginContainer = document.querySelector(".login-container");
  loginLink = document.querySelector(".header__login");
  signUpLink = document.querySelector(".userform__signup-link");
  signUpContainer = document.querySelector(".signup-container");

  loginForm = document.querySelector(".login-form");
  usernameInput = document.querySelector("#login");
  passwordInput = document.querySelector("#password");
  incorrectElement = document.querySelector(".userform__incorrect-data");

  signupForm = document.querySelector(".signup-form");
  overlayListener() {
    this.overlayContainer.addEventListener("click", () => {
      this.overlayContainer.classList.add("hidden");
      this.closeForm(this.loginContainer);
      this.closeForm(this.signUpContainer);
    });
  }

  displayLogin() {
    this.loginLink.addEventListener("click", () => {
      this.overlayContainer.classList.remove("hidden");
      this.loginContainer.classList.remove("hidden");
    });
  }
  closeForm(form) {
    form.classList.add("hidden");
  }
  compareLoginData(usersDataBase) {
    const dataEqual = usersDataBase.find((user) => {
      return (
        user.username === this.usernameInput.value &&
        user.password === this.passwordInput.value
      );
    });
    if (dataEqual) {
      this.closeForm(this.loginContainer);
      this.overlayContainer.classList.add("hidden");
      this.hideLoginLink();
    }
    if (!dataEqual) this.incorrectElement.classList.remove("hidden");
  }

  hideLoginLink() {
    this.loginLink.classList.add("hidden");
  }
  displaySignupForm() {
    this.signUpLink.addEventListener("click", () => {
      this.loginContainer.classList.add("hidden");
      this.signUpContainer.classList.remove("hidden");
    });
  }
  sendUserData() {
    this.signupForm.addEventListener("submit", (e) => {
      // e.preventDefault();
      const username = document.getElementById("login-signup").value;
      const password = document.getElementById("password-signup").value;
      const email = document.getElementById("email").value;
      const data = { username: username, password: password, email: email };
      fetch("http://localhost:3000/createUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => {
          if (response.ok) {
            console.log("Dane zapisane");
          } else {
            console.log("Blad podczas zapisywania");
          }
        })
        .catch((err) => {
          console.log("Blad podczas wysylania", err);
        });
      this.overlayContainer.classList.add("hidden");
      this.closeForm(this.signUpContainer);
    });
  }

  loginBtnListener(callback) {
    this.loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      callback();
    });
  }
}
export default new LoginView();
