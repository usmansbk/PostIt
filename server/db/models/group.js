module.exports = (sequelize, DataTypes) => {
  const Group = sequelize.define('Group', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: true,
      },
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
  }, {
    classMethods: {
      associate: function associate(models) {
      }
    }
  });
  return Group;
};
