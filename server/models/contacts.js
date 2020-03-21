var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// creating the schema
var contactSchema = new Schema({

	name: String,
	email: String,
	// country_code: Number,
	number: Number,
	message: String,
	// how_heard_about_us: String,


	// type_browser: String,
	// ip_address: String,
	// created_at: { type: Date, default: Date.now }
});

var Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;