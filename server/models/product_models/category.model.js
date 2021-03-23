module.exports = (sequelize, Sequelize) => {
  const ProductCategory = sequelize.define("product_categories", {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
  });

  return ProductCategory;
};
