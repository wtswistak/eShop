import { API_URL } from "./config";
import { getJSON } from "./helper";

class ProductModel {
  cartProducts = [];
  async loadProducts() {
    try {
      const products = await getJSON(`${API_URL}`);
      console.log(products);

      return products;
    } catch (error) {
      console.error(`${error}`);
      throw error;
    }
  }
  async loadCategories() {
    try {
      const categories = await getJSON(`${API_URL}/categories`);
      categories.push("all products");
      return categories;
    } catch (error) {
      console.log(`${error}`);
    }
  }
  getProductsByCategory(category, products) {
    let filterProducts;
    category === "all products"
      ? (filterProducts = products)
      : (filterProducts = products.filter(
          (product) => product.category === category
        ));
    return filterProducts;
  }
  getProductById(id, products) {
    return products.find((product) => product.id === id);
  }
}
export default new ProductModel();
