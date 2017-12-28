module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    message: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notNull: true,
      },
      set(val) {
        this.setDataValue('message', val);
      },
      get() {
        return this.getDataValue('message');
      }
    },
  });
  return Post;
};
