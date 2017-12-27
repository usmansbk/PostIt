'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Users',
    [
      {
        firstname: 'Bello',
        surname: 'Babakolo',
        username: 'fleetbeekay',
        email: 'fleetbeekay@gmail.com',
        password: '12345678',
        birthday: '18-12-1992',
        gender: 'male'
      },
      {
        firstname: 'Usman',
        surname: 'Babakolo',
        username: 'usmansbk',
        email: 'usmansbk@gmail.com',
        password: '12345678',
        birthday: '12-07-1995',
        gender: 'male'
      },
      {
        firstname: 'Fatima',
        surname: 'Babakolo',
        username: 'fsbk',
        email: 'fsbk@gmail.com',
        password: '12345678',
        birthday: '02-08-2001',
        gender: 'female'
      },
      {
        firstname: 'Maryam',
        surname: 'Babakolo',
        username: 'mimeebeekay',
        email: 'maryamsbk@gmail.com',
        password: '12345678',
        birthday: '12-07-2012',
        gender: 'female'
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
