module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    message: {
      type: DataTypes.TEXT,
      allowNull: false,
     set(val) {
        this.setDataValue('message', val);
      },
      get() {
        return this.getDataValue('message');
      }
    }
  });
  Post.associate = function associate(models) {
    const { User, Group } = models;
    Post.belongsTo(User, { as: 'author' });
  }
  return Post;
};
