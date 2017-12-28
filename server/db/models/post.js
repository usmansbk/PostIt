module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    message: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notNull: true,
      }
    },
  });
  return Post;
};
