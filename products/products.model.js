const products = [
  {
    id: "red shoe",
    description: "Red Shoe",
    price: 42.42,
    reviews: [],
  },
  {
    id: "blue jean",
    description: "Blue Jean",
    price: 55.55,
    reviews: [],
  },
];

function getAllProducts() {
  return products;
}

function getProductsByPrice(min, max) {
  return products.filter((p) => p.price >= min && p.price <= max);
}

function getProduct(id) {
  return products.find((p) => p.id == id);
}

function addProduct(id, description, price) {
  const product = { id, description, price, reviews: [] };
  products.push(product);
  return product;
}

function addNewReview(id, comment, rating) {
  const review = { comment, rating };
  const product = products.find((p) => p.id == id);

  if (!product) return;

  if (!product.reviews) {
    product.reviews = [];
  }

  product.reviews.push(review);
  return review;
}

module.exports = {
  getAllProducts,
  getProductsByPrice,
  getProduct,
  addProduct,
  addNewReview,
};
