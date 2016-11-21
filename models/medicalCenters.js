var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var medicalCenterSchema = new Schema({

	name: String,
	tax_identification: String,
	email: String,
	country: String

});

var MedicalCenter = mongoose.model('MedicalCenter',medicalCenterSchema);

module.exports = MedicalCenter;