'use strict';

var session = require('express-session');
var model = require('../model');
var bcrypt = require('bcrypt-nodejs');
var flash = require('express-flash');

exports.show_login = (req, res) => {
	res.render('pages/login', {title: 'login'});
};

exports.do_login = (req, res) => {
	var username = req.param('username');
	var password = req.param('password');

	model.User.findOne({
		where: {
			username: username
		}
	})
	.then(user => {
		if(user == null){
			req.flash('message','User Not Found !');
			res.redirect('/login');
		}

		var check_password = bcrypt.compareSync(password,user.password);

		if(!check_password){
			req.flash('message','Invalid Credentials');
			res.redirect('/login');
		} else {
			req.session.user = user;
			res.redirect('/admin');
		}
	});
};

exports.do_logout = (req, res) => {
	req.session.destroy(function(){
      console.log("user logged out.")
  });
	res.redirect('/');
};