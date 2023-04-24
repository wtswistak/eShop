class CartView {
  cartLink = document.querySelector(".header__cart");
  cartContainer = document.querySelector(".cart");
  productsContainer = document.querySelector(".products");
  emptyContainer = document.querySelector(".cart__empty-text");

  cartLinkListener() {
    this.cartLink.addEventListener("click", () => {
      this.cartContainer.classList.toggle("hidden");
    });
  }
  createCartElement(product) {
    return ` <div class="cart__item">
  <figure class="cart__figure">
    <img class="cart__image" src="${product.image}" alt="Product image" />
  </figure>
  <h4 class="cart__header">${product.title}</h4>
</div>`;
  }
  render(product) {
    this.cartContainer.insertAdjacentHTML(
      "beforeend",
      this.createCartElement(product)
    );
  }
  cartButtonListener(callback) {
    this.productsContainer.addEventListener("click", (e) => {
      const btn = e.target.closest(".products__button");
      if (!btn) return;

      const productId = parseInt(btn.dataset.id);
      callback(productId);
    });
  }
  hideEmptyText() {
    this.emptyContainer.classList.add("hidden");
  }
}

export default new CartView();
