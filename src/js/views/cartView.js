class CartView {
  cartBtn = document.querySelector(".header__cart");
  cartContainer = document.querySelector(".cart");
  productsContainer = document.querySelector(".products");
  emptyContainer = document.querySelector(".cart__empty-text");
  exitBtn = document.querySelector(".cart__exit-btn");
  totalPrice = document.querySelector(".cart__total-price");

  cartBtnListener() {
    this.cartBtn.addEventListener("click", () => {
      this.cartContainer.classList.toggle("hidden");
    });
  }
  createCartElement(product) {
    return ` <div class="cart__item">
  <figure class="cart__figure">
    <img class="cart__image" src="${product.image}" alt="Product image" />
  </figure>
  <h4 class="cart__title">${product.title}</h4>
</div>`;
  }
  render(product) {
    this.cartContainer.insertAdjacentHTML(
      "afterbegin",
      this.createCartElement(product)
    );
  }
  productBtnListener(callback) {
    this.productsContainer.addEventListener("click", (e) => {
      const btn = e.target.closest(".products__button");
      if (!btn) return;

      const productId = parseInt(btn.dataset.id);
      callback(productId);
    });
  }
  hideEmptyText() {
    this.emptyContainer.classList.add("none");
  }
  exitBtnListener() {
    this.exitBtn.addEventListener("click", () => {
      this.cartContainer.classList.add("hidden");
    });
  }
  updateTotalPrice(price) {
    this.totalPrice.textContent = `$${price.toFixed(2)}`;
  }
}

export default new CartView();
