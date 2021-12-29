module.exports = (sequelize, Sequelize) => {
  const Products = sequelize.define("products", {
    ProductName: {
      type: Sequelize.STRING
    },
   
  });

  return Products;
};
