module.exports = (sequelize, Sequelize) => {
  const Ordenes = sequelize.define("Orders", {
    OrderID: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    OrdertName: {
      type: Sequelize.STRING
    },
    OrdertDescription: {
      type: Sequelize.STRING
    },
   
  });

  return Ordenes;
};
