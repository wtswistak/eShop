import model from "./model";
import view from "./views/view";
import categoriesView from "./views/categoriesView";
import cartView from "./views/cartView";
import loginView from "./views/loginView";

class Controller {
  constructor(model, view, categoriesView, cartView, loginView) {
    this.model = model;
    this.view = view;
    this.categoriesView = categoriesView;
    this.cartView = cartView;
    this.loginView = loginView;
  }
  async init() {
    this.view.renderSpinner();

    const products = await this.model.loadProducts();
    const categories = await this.model.loadCategories();
    const usersData = await this.model.loadUsersData();

    this.view.render(products);
    this.categoriesView.render(categories);

    this.categoriesView.categoriesListener((id) => {
      const filterProducts = this.model.getProductsByCategory(id, products);
      this.view.render(filterProducts);
    });

    this.cartView.productBtnListener((item) => {
      const cartProduct = this.model.getProductById(item, products);
      model.cartProducts.push(cartProduct);
      const totalPrice = model.getTotalCartPrice(model.cartProducts);
      cartView.updateTotalPrice(totalPrice);
      cartView.displayPriceBox();

      this.cartView.render(cartProduct);
      if (this.model.cartProducts) this.cartView.hideEmptyText();
    });

    this.cartView.cartBtnListener();
    this.cartView.exitBtnListener();
    this.loginView.overlayListener();
    this.loginView.exitbBtnListener();
    this.loginView.displayLogin();
    this.loginView.displaySignupForm();

    this.loginView.sendUserData();

    this.loginView.loginBtnListener(() => {
      if (!usersData)
        this.loginView.incorrectElement.classList.remove("hidden");
      this.loginView.compareLoginData(usersData);
    });
  }
}

const controller = new Controller(
  model,
  view,
  categoriesView,
  cartView,
  loginView
);
controller.init();
