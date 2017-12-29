module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstname: {
      type: DataTypes.STRING,
      validate: {
        isAlpha: true,
      },
      set(val) {
        this.setDataValue('firstname', val);
      },
      get() {
        return this.getDataValue('firstname');
      }
    },
    surname: {
      type: DataTypes.STRING,
      validate: {
        isAlpha: true,
      },
      set(val) {
        this.setDataValue('surname', val);
      },
      get() {
        return this.getDataValue('surname');
      }
    },
    username: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
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
      set(val) {
        this.setDataValue('password', val);
      },
      get() {
        return this.getDataValue('password');
      }
    },
    birthday: {
      type: DataTypes.DATEONLY,
      validate: {
        isDate: true,
      },
      set(val) {
        this.setDataValue('birthday', val);
      },
      get() {
        return this.getDataValue('birthday');
      }
    },
    gender: {
      type: DataTypes.ENUM,
      values: ['male', 'female'],
      set(val) {
        this.setDataValue('gender', val);
      },
      get() {
        return this.getDataValue('gender');
      }
    }
  }, {
    classMethods: {
      associate: function associate(models) {
        const { Group } = models;
        User.belongsToMany(Group, { through: 'UserGroup' });
      }
    },
    getterMethods: {
      fullName() {
        return `${this.firstname} ${this.surname}`;
      }
    }
  });
  return User;
};
