module.exports = (sequelize, DataTypes) => {
  const Group = sequelize.define('Group', {
    name: DataTypes.STRING,
    purpose: DataTypes.STRING,
    invites: DataTypes.STRING
  }, {
    classMethods: {
      associate: function associate(/* models */) {
      // associations can be defined here
      }
    }
  });
  return Group;
};
