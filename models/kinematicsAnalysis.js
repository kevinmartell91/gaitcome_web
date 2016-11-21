var mongoose = require('mongoose');
var Schema = mongoose.Schema;
/*  

	CONVENTIONS
	===========

		l : left 
		r : rigth
		kne : knee
		ank : ankle
		toe : toe
		hee : heels / calcaneus
		fwt : fontal waist
		bwt : back waist
		trc : trocanter

		spl : sagittal slane left 
		spr : sagittal plane right

		plv : pelvis
		hip : hip
		
	*/

var kinematicsAnalysisSchema = new Schema({
	// save as flat atributtes of the other collection
	// or just save their ids.?
	patient_id: String,
	medical_center_id : String,
	therapist_id : String,

	accesories: {
      is_assited_walk: Boolean,
      is_treadmills: Boolean,
      is_walker: Boolean,
      is_orthoses: Boolean,
      is_parallel_bars: Boolean
    },
    
    accesories_descriptions: {  
      assited_walk: String,
      treadmills: String,
      walker: String,
      orthoses: String,
      parallel_bars: String
	},

	patient_descriptions : String,

	// MARKERS POSCITIONS 
	lkne: [{x: Number, y: Number, z: Number }],
	rkne: [{x: Number, y: Number, z: Number }],
	lank: [{x: Number, y: Number, z: Number }],
	rank: [{x: Number, y: Number, z: Number }],
	ltoe: [{x: Number, y: Number, z: Number }],
	rtoe: [{x: Number, y: Number, z: Number }],
	lhee: [{x: Number, y: Number, z: Number }],
	rhee: [{x: Number, y: Number, z: Number }],
	lfwt: [{x: Number, y: Number, z: Number }],
	rfwt: [{x: Number, y: Number, z: Number }],
	lbwt: [{x: Number, y: Number, z: Number }],
	rbwt: [{x: Number, y: Number, z: Number }],
	ltrc: [{x: Number, y: Number, z: Number }],
	rtrc: [{x: Number, y: Number, z: Number }],

	//UNIT ANGLES 
	spl_kne: [{ type: Number }],
	spl_ank: [{ type: Number }],
	spl_plv: [{ type: Number }],
	spl_hip: [{ type: Number }],

	spr_kne: [{ type: Number }],
	spr_ank: [{ type: Number }],
	spr_plv: [{ type: Number }],
	spr_hip: [{ type: Number }],

	fp_kne: [{ type: Number }],
	fp_ank: [{ type: Number }],
	fp_plv: [{ type: Number }],
	fp_hip: [{ type: Number }],

	tp_kne: [{ type: Number }],
	tp_ank: [{ type: Number }],
	tp_plv: [{ type: Number }],
	tp_hip: [{ type: Number }],

	created_at: { type: Date, default: Date.now }

	//other units
	/*
		TO DO
	*/

});

var KinematicsAnalysis = mongoose.model('KinematicsAnalysis',kinematicsAnalysisSchema);

module.exports = KinematicsAnalysis;