class CategoriesView {
  parentElement = document.querySelector(".categories__list");
  selectedCategory = null;

  createCategoryElement(category) {
    return ` <li class="categories__item">
    <a class="categories__link" href="#" >${category}</a>
  </li>`;
  }
  categoriesListener(callback) {
    const categoriesElements = document.querySelectorAll(".categories__link");
    categoriesElements.forEach((categoryEl) => {
      categoryEl.addEventListener("click", (e) => {
        e.preventDefault();
        const target = e.target.innerText;
        this.selectedCategory = target;
        callback(target);
      });
    });
  }

  render(categories) {
    categories.map((category) =>
      this.parentElement.insertAdjacentHTML(
        "afterbegin",
        this.createCategoryElement(category)
      )
    );
  }
}
export default new CategoriesView();
