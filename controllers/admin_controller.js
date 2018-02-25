'use strict';

var model = require('../model');

exports.index = (req, res) => {
	res.render('pages/admin', {title: 'Dashboard - Home'});
};

exports.list_student = (req, res) => {
	model.Student.all()
	.then(students => {
		res.render('pages/student', {title: 'Dashboard - Student List',students:students});
	});
};

exports.create_student = (req, res) => {
	res.render('pages/student_create', {title: 'Dashboard - Add New Student'});
};

exports.store_student = (req, res) => {
	var student = model.Student.build({
		name: req.param('name'),
		email: req.param('email'),
		age: req.param('age'),
		about: req.param('about')
	});
	student.save()
	.then(() => {
		req.flash('message','Success !');
		res.redirect('/admin/student/create');
	})
	.catch((err) => {
		req.flash('message',err);
		res.redirect('/admin/student/create');
	});
};

exports.show_student = (req, res) => {
	model.Student.findById(req.param('id'))
	.then(student => {
		if(student != null) {
			res.json({
				status:200,
				message:'User Found !',
				data: {
					id: student.id,
					name: student.name,
					email: student.email,
					age: student.age,
					about: student.about
				}
			});
		} else {
			res.json({
				status:200,
				message:'User Not Found !',
				data: {}
			});
		}
	});
};

exports.edit_student = (req, res) => {
	model.Student.findById(req.param('id'))
	.then(student => {
		if(student != null) {
			res.render('pages/student_edit',{title: 'Dashboard - Edit Student', student:student})
		} else {
			res.json({
				status:200,
				message:'User Not Found !',
				data: {}
			});
		}
	});
};

exports.update_student = (req, res) => {
	model.Student.update({
		name: req.param('name'),
		email: req.param('email'),
		age: req.param('age'),
		about: req.param('about')
	},{
		where: {
			id: req.param('id')
		}
	})
	.then(() => {
		req.flash('message','Success !');
		res.redirect('/admin/student/'+req.param('id')+'/edit');
	})
	.catch((err) => {
		req.flash('message',err);
		res.redirect('/admin/student/'+req.param('id')+'/edit');
	});
}