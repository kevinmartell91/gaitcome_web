var Contact = require('../models/contacts.js');

// creating endpoint /api/contacts for POST
exports.postContact = function(req, res) {
	// creating a new instance of the Contact model


	console.log('postContact=====================================');
	console.log('postContact');
	console.log('req.req', req.headers['user-agent']);
	console.log('postContact=====================================');

	var contact = new Contact();
	// setting contact properties that come from POST
	contact.name = req.body.name;
	contact.email = req.body.email;
	contact.country_code = req.body.country_code;
	contact.number = req.body.number;
	contact.message = req.body.message;
	contact.how_heard_about_us = req.body.how_heard_about_us;
	contact.type_browser = req.body.type_browser;
	contact.ip_address = req.body.ip_address;

	contact.save(function(err){
		if (err)
			return res.send(err);

		res.json({ message: 'contact added', data: contact});
	});
};

exports.getContacts = function(req, res) {
	console.log('getContacts');

	Contact.find(function(err, contacts){
		if (err)
			return res.send(err);

		res.json(contacts);
	});
};

exports.getContact = function(req, res){
	console.log('getContact');

	Contact.findById(req.params.contact_id, function(err, contact){
		if (err)
			return res.send(err);
		res.json(contact);
	});
};