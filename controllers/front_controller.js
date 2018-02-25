'use strict';

var model = require('../model');

exports.index = (req, res) => {
	model.Student.all()
	.then(students => {
		res.render('pages/index', {title: 'Home',students:students});
	});
}