module.exports = (sequelize, Sequelize) => {
  const Record = sequelize.define("records", {
    score: {
      type: Sequelize.INTEGER,
    },
    utility: {
      type: Sequelize.INTEGER,
    },
  });

  return Record;
};
