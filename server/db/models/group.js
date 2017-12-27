export default function (sequelize, DataTypes) {
  let Group = sequelize.define('Group', {
    name: DataTypes.STRING,
    purpose: DataTypes.STRING,
    invites: DataTypes.STRING
  }, {
    classMethods: {
      associate: (models) => {
        // associations can be defined here
      }
    }
  });
  return Group;
};
