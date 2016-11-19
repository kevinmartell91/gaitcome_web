var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var kinematicAnalysisSchema = new Schema({
	// save as flat atributtes of the other collection
	// or just save their ids.?
	patient_id: String,
	medical_center_id: String,
	psycotherapist_id:String,

	left_knee: [{x: Number, y: Number, z: Number }],
	left_ankle: [{x: Number, y: Number, z: Number }],
	left_perlvis: [{x: Number, y: Number, z: Number }],
	left_hip: [{x: Number, y: Number, z: Number }],

	right_knee: [{x: Number, y: Number, z: Number }],
	right_ankle: [{x: Number, y: Number, z: Number }],
	right_perlvis: [{x: Number, y: Number, z: Number }],
	right_hip: [{x: Number, y: Number, z: Number }],

	created_at: { type: Date, default: Date.now }

}),

var KinematicAnalysis = mongoose.model('KinematicAnalysis',kinematicAnalysisSchema);

module.exports = KinematicAnalysis;