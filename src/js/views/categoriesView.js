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
    categoriesElements[0].classList.add("underline");
    categoriesElements.forEach((categoryEl) => {
      categoryEl.addEventListener("click", (e) => {
        e.preventDefault();
        const target = e.target.innerText;
        this.selectedCategory = e.target;

        this.selectedCategory.classList.add("underline");

        // Iterowanie po pozostałych elementach i dodawanie stylu "text-decoration: none"
        categoriesElements.forEach((el) => {
          if (el !== this.selectedCategory) {
            el.classList.remove("underline");
          }
        });
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
