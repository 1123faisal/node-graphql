const {
  getAllProducts,
  getProductsByPrice,
  getProduct,
  addProduct,
  addNewReview,
} = require("./products.model");

module.exports = {
  Query: {
    products: () => {
      return getAllProducts();
    },
    productsByPrice: (_, { minPrice, maxPrice }) => {
      return getProductsByPrice(minPrice, maxPrice);
    },
    productById: (_, { id }) => {
      return getProduct(id);
    },
  },
  Mutation: {
    addNewProduct: (_, { id, description, price }) => {
      return addProduct(id, description, price);
    },
    addNewReview: (_, { id, comment, rating }) => {
      return addNewReview(id, comment, rating);
    },
  },
};
