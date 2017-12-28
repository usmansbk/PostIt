module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    message: DataTypes.STRING
  }, {
    classMethods: {
      associate: function associate(/* models */) {
      // associations can be defined here
      }
    }
  });
  return Post;
};
