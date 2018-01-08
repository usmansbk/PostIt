module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        notEmpty: true,
        is: /^[a-zA-Z0-9_]+$/i
      },
      set(val) {
        this.setDataValue('username', val);
      },
      get() {
        return this.getDataValue('username');
      }
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        isEmail: true,
        notEmpty: true
      },
      allowNull: false,
      set(val) {
        this.setDataValue('email', val);
      },
      get() {
        return this.getDataValue('email');
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8, 32],
        notEmpty: true
      },
      set(val) {
        this.setDataValue('password', val);
      },
      get() {
        return this.getDataValue('password');
      }
    }
  });

  User.associate = function associate(models) {
    const { Group } = models;
    User.belongsToMany(Group, { through: 'UserGroup' });
  };

  User.getterMethods = {
    fullName() {
      return `${this.firstname} ${this.surname}`;
    }
  };
  return User;
};
