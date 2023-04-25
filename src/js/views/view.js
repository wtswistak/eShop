class ProductView {
  parentElement = document.querySelector(".products");

  createProductElement(product) {
    return `<div class="products__product-item">
    <img class="products__image" src="${product.image}" alt="Product" />
    <h2 class="products__title">${product.title}</h2>
    <div class="products__price-button-container">
      <p class="products__price">$${product.price}</p>
      <button data-id="${product.id}" class="products__button">Add to cart</button>
    </div>
  </div>`;
  }

  render(products) {
    this.parentElement.innerHTML = "";
    products.map((product) => {
      this.parentElement.insertAdjacentHTML(
        "beforeend",
        this.createProductElement(product, 4)
      );
    });
  }
}
export default new ProductView();
