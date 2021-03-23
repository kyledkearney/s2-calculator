module.exports = (sequelize, Sequelize) => {
  const Post = sequelize.define("posts", {
    title: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    content: {
      type: Sequelize.TEXT('long'),
    },
    slug: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    summary: {
      type: Sequelize.STRING(400),
      allowNull: false,
    },
    featured: {
      type: Sequelize.BOOLEAN,
    },
    isArchived: {
      type: Sequelize.BOOLEAN,
    },
    publishDate: {
      type: Sequelize.DATE,
      allowNull: false,
      isDate: true,
    }
  });

  return Post;
};
