var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var medicalCenterSchema = new Schema({

	name: String,
	tax_identification: String,
	email: String,
	country: String,
	
	// Will be send by email
	username: String,
  	password: String,

  	// will be requested later in update Info
    // address: {
  	 //  street: String,
  	 //  city: String,
  	 //  state: String,
  	 //  zip: Number,
  	 //  country: String
    // }

});

var MedicalCenter = mongoose.model('MedicalCenter',medicalCenterSchema);

module.exports = MedicalCenter;