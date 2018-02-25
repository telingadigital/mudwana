'use strict';

var moment = require('moment');
var bcrypt = require('bcrypt-nodejs');

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
    return queryInterface.bulkInsert('Users',[
      {
        username: 'admin',
        password: bcrypt.hashSync('admin'),
        name: 'Admin',
        description: 'Super User',
        createdAt: moment().format('YYYY-MM-DD h:m:s'),
        updatedAt: moment().format('YYYY-MM-DD h:m:s')
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('Users', null, {});
  }
};
