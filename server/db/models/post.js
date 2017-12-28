module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    message: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notNull: true
      },
      set(val) {
        this.setDataValue('message', val);
      },
      get() {
        return this.getDataValue('message');
      }
    }
  }, {
    classMethods: {
      associate: function associate(models) {
        const Group = models.Group,
              Post = models.Post,
              User = models.User;
        Post.belongsTo(Group);
        Post.belongsTo(User, { as: 'author' });
      }
    }
  });
  return Post;
};
