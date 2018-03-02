module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    message: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notEmpty: true
      },
      set(val) {
        this.setDataValue('message', val);
      },
      get() {
        return this.getDataValue('message');
      }
    },
    priority: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    }
  });
  Post.associate = function associate(models) {
    const { User } = models;
    Post.belongsTo(User, { as: 'author' });
  };
  return Post;
};
