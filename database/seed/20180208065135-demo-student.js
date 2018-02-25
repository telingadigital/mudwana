'use strict';

var moment = require('moment');

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
    return queryInterface.bulkInsert('Students',[
      {
        name: 'Endru',
        email: 'endrureza@gmail.com',
        age: 25,
        about: 'About Endru',
        createdAt: moment().format('YYYY-MM-DD h:m:s'),
        updatedAt: moment().format('YYYY-MM-DD h:m:s')
      },
      {
        name: 'Kania',
        email: 'kania@gmail.com',
        age: 25,
        about: 'About Kania',
        createdAt: moment().format('YYYY-MM-DD h:m:s'),
        updatedAt: moment().format('YYYY-MM-DD h:m:s')
      },
      {
        name: 'Farah',
        email: 'farah@gmail.com',
        age: 25,
        about: 'About Farah',
        createdAt: moment().format('YYYY-MM-DD h:m:s'),
        updatedAt: moment().format('YYYY-MM-DD h:m:s')
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
    return queryInterface.bulkDelete('Students', null, {})
  }
};
