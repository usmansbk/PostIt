module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstname: DataTypes.STRING,
    surname: DataTypes.STRING,
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    birthday: DataTypes.STRING,
    gender: DataTypes.STRING
  }, {
    classMethods: {
      associate: function associate(/* models */) {
        // associations can be defined here
      }
    }
  });
  return User;
};
