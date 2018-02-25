'use strict';

var path = require('path');
require('dotenv').config({path: path.resolve(__dirname, '../.env')});

module.exports = {
	development: {
		username: 'root',
		password: 'root',
		database: 'mudawana',
		host: 'localhost',
		dialect: 'mysql'
	},
	test: {
		username: 'root',
		password: 'root',
		database: 'mudawana',
		host: 'localhost',
		dialect: 'mysql'
	},
	production: {
		username: process.env.DB_USERNAME,
		password: process.env.DB_PASSWORD,
		database: process.env.DB_DATABASE,
		host: process.env.DB_HOST,
		dialect: 'mysql'
	}
}