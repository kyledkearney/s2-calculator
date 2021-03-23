module.exports = (sequelize, Sequelize) => {
  const FinancingCategory = sequelize.define("financing_categories", {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
  });

  return FinancingCategory;
};
