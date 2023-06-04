function getAllOrders() {
  return [
    {
      date: "2005-05-05",
      subtotal: 90.99,
      items: [
        {
          product: {
            id: "red shoe",
            description: "Red Shoe",
            price: 42.42,
          },
          qty: 4,
        },
        {
          product: { id: "blue jean", description: "Blue Jean", price: 55.55 },
          qty: 4,
        },
      ],
    },
  ];
}

module.exports = {
  getAllOrders,
};
