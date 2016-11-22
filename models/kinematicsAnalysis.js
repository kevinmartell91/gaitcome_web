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
	lkne: [{ _id:false, x: Number, y: Number, z: Number }],
	rkne: [{ _id:false, x: Number, y: Number, z: Number }],
	lank: [{ _id:false, x: Number, y: Number, z: Number }],
	rank: [{ _id:false, x: Number, y: Number, z: Number }],
	ltoe: [{ _id:false, x: Number, y: Number, z: Number }],
	rtoe: [{ _id:false, x: Number, y: Number, z: Number }],
	lhee: [{ _id:false, x: Number, y: Number, z: Number }],
	rhee: [{ _id:false, x: Number, y: Number, z: Number }],
	lfwt: [{ _id:false, x: Number, y: Number, z: Number }],
	rfwt: [{ _id:false, x: Number, y: Number, z: Number }],
	lbwt: [{ _id:false, x: Number, y: Number, z: Number }],
	rbwt: [{ _id:false, x: Number, y: Number, z: Number }],
	ltrc: [{ _id:false, x: Number, y: Number, z: Number }],
	rtrc: [{ _id:false, x: Number, y: Number, z: Number }],

	//UNIT ANGLES 
	spl_kne: [ Number ],
	spl_ank: [ Number ],
	spl_plv: [ Number ],
	spl_hip: [ Number ],

	spr_kne: [ Number ],
	spr_ank: [ Number ],
	spr_plv: [ Number ],
	spr_hip: [ Number ],

	fp_kne: [ Number ],
	fp_ank: [ Number ],
	fp_plv: [ Number ],
	fp_hip: [ Number ],

	tp_kne: [ Number ],
	tp_ank: [ Number ],
	tp_plv: [ Number ],
	tp_hip: [ Number ],

	created_at: { type: Date, default: Date.now }

	//other units
	/*
		TO DO
	*/

});

var KinematicsAnalysis = mongoose.model('KinematicsAnalysis',kinematicsAnalysisSchema);

module.exports = KinematicsAnalysis;