'use strict';

var express = require('express');
var route = express.Router();
var path = require('path');

// Front Route
route.get('/', (req, res) => {
	res.send('hello this is api!');
});

module.exports = route;