module.exports = (sequelize, Sequelize) => {
  const Liability = sequelize.define("liabilities", {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    cost: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  });

  return Liability;
};
