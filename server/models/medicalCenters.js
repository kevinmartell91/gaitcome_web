var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var medicalCenterSchema = new Schema({

	name: String,
	tax_identification: String,
	email: String,
	country: String,
	
	username: String,
  	password: String,

});

var MedicalCenter = mongoose.model('MedicalCenter',medicalCenterSchema);

module.exports = MedicalCenter;