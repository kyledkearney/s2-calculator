module.exports = (sequelize, Sequelize) => {
  const RecurringCost = sequelize.define("recurring_costs", {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },

    // 1 = once a year, 2 = every six months, 4 = every quarter, 6 = every two months, 12 = every month, 24 = every other week, 52 = every week
    frequency: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    amount: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  });

  return RecurringCost;
};
