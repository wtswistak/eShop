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
  renderSpinner() {
    const html = `
    <div class="spinner">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
      </svg>
    </div>
    `;
    this.parentElement.insertAdjacentHTML("afterbegin", html);
  }
}
export default new ProductView();
