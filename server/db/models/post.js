export default function (sequelize, DataTypes) {
  let Post = sequelize.define('Post', {
    name: DataTypes.STRING,
    message: DataTypes.STRING
  }, {
    classMethods: {
      associate: (models) => {
        // associations can be defined here
      }
    }
  });
  return Post;
};
