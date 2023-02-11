export default class Inventory {
    constructor() {
      this.products = [];
    }
    getProduct(productId) {
      const product = this.products.filter((product) => product.id === productId);
      return product[0];
    }
    getAllProducts() {
      return this.products;
    }
  
    addProduct(product) {
      this.products.push(product);
    }
    updateProduct(productId, updatedProduct) {
      const distinctProducts = this.products.filter(
        (product) => product.id != productId
      );
  
      distinctProducts.push(updatedProduct);
      console.log(distinctProducts);
    }
  }
  