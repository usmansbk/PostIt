module.exports = (sequelize, DataTypes) => {
  const Group = sequelize.define('Group', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
     set(val) {
        this.setDataValue('name', val);
      },
      get() {
        return this.getDataValue('name');
      }
    },
    purpose: {
      type: DataTypes.STRING,
      validate: {
        len: [0, 50]
      },
      set(val) {
        this.setDataValue('purpose', val);
      },
      get() {
        return this.getDataValue('purpose');
      }
    },
    invites: {
      type: DataTypes.STRING,
      set(val) {
        this.setDataValue('invites', val);
      },
      get() {
        return this.getDataValue('invites');
      }
    }
  });

  Group.associate = function associate(models) {
    const { User, Post } = models;
    Group.hasMany(Post, { as: 'Posts', foreignKey: 'groupId' });
    Group.belongsTo(User, { as: 'creator' });
    Group.belongsToMany(User, { through: 'UserGroup' });
  }
  return Group;
};
