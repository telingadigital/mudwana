'use strict';

var express = require('express');
var route = express.Router();
var path = require('path');
var session = require('express-session');
var AdminController = require('../controllers/admin_controller.js');
var FrontController = require('../controllers/front_controller.js');
var AuthController = require('../controllers/auth_controller.js');

// Front Route
route.get('/', FrontController.index);

// Auth Route
route
	.get('/login', AuthController.show_login)
	.post('/login',AuthController.do_login);
route.get('/logout', AuthController.do_logout);


// Back Route
route.get('/admin', isLoggedIn, AdminController.index);
route
	.get('/admin/student', isLoggedIn, AdminController.list_student)
	.get('/admin/student/create', isLoggedIn, AdminController.create_student)
	.post('/admin/student', isLoggedIn, AdminController.store_student)
	.get('/admin/student/:id', isLoggedIn, AdminController.show_student)
	.get('/admin/student/:id/edit', isLoggedIn, AdminController.edit_student)
	.put('/admin/student/:id', isLoggedIn, AdminController.update_student)

module.exports = route;

function isLoggedIn(req, res, next) {
	if(req.session.user){
		next();
	} else {
		res.redirect('/login');
	}
}