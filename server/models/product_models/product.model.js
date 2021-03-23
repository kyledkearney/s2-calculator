module.exports = (sequelize, Sequelize) => {
  const Product = sequelize.define("products", {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    price: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    // if true the product appreciates if false / null the product depreciates.
    appreciation: {
      type: Sequelize.BOOLEAN,
    },
    rate: {
      type: Sequelize.INTEGER,
    }
  });

  return Product;
};
