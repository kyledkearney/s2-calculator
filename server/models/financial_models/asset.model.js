module.exports = (sequelize, Sequelize) => {
  const Asset = sequelize.define("assets", {
    amount: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  });

  return Asset;
};
