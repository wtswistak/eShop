class LoginView {
  overlayContainer = document.querySelector(".overlay");
  loginContainer = document.querySelector(".login");
  loginLink = document.querySelector(".header__login");

  exitLogin() {
    this.overlayContainer.addEventListener("click", () => {
      this.overlayContainer.classList.add("hidden");
      this.loginContainer.classList.add("hidden");
    });
  }
  displayLogin() {
    this.loginLink.addEventListener("click", () => {
      this.overlayContainer.classList.remove("hidden");
      this.loginContainer.classList.remove("hidden");
    });
  }
}
export default new LoginView();
