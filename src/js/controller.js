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
    const products = await this.model.loadProducts();
    const categories = await this.model.loadCategories();

    this.view.render(products);
    this.categoriesView.render(categories);
    this.cartView.cartBtnListener();
    this.cartView.exitBtnListener();
    this.loginView.exitLogin();
    this.loginView.displayLogin();

    this.cartView.productBtnListener((item) => {
      const cartProduct = this.model.getProductById(item, products);
      model.cartProducts.push(cartProduct);
      const totalPrice = model.getTotalCartPrice(model.cartProducts);
      cartView.updateTotalPrice(totalPrice);

      this.cartView.render(cartProduct);
      if (this.model.cartProducts) this.cartView.hideEmptyText();
    });
    this.categoriesView.categoriesListener((id) => {
      const filterProducts = this.model.getProductsByCategory(id, products);
      this.view.render(filterProducts);
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
