
module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("users", {
    username: {
      type: Sequelize.STRING,
      unique: true,
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
      unique: true,
      allowNull: false,
      isEmail: true,
    },
    password: {
      type: Sequelize.STRING,
      unique: true,
      allowNull: false,
    }
  });

  return User;
};
