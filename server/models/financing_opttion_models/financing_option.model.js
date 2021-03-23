module.exports = (sequelize, Sequelize) => {
  const FinancingOption = sequelize.define("financing_options", {
    interestRate: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    term: {
      type: Sequelize.INTEGER,
    },
    monthlyPayment: {
      type: Sequelize.INTEGER,
    },
  });

  return FinancingOption;
};
