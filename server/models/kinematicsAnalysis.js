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

	// MARKERS 3d POSITIONS => from MATLAB
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

	// BOOK this data after have the 3d position from matlab
	// ANGLES LIST work with api and show the data in the view
	//							 [0% - 100%, ang]					[0% - 100%, lim-inf , lim-sup]				
	spl_kne: {patient_angles : [[ Number , Number]], normal_ranges : [[Number , Number, Number]]},
	spl_ank: {patient_angles : [[ Number , Number]], normal_ranges : [[Number , Number, Number]]},
	spl_plv: {patient_angles : [[ Number , Number]], normal_ranges : [[Number , Number, Number]]},
	spl_hip: {patient_angles : [[ Number , Number]], normal_ranges : [[Number , Number, Number]]},

	fp_kne: {patient_angles : [[ Number , Number]], normal_ranges : [[Number , Number, Number]]},
	fp_ank: {patient_angles : [[ Number , Number]], normal_ranges : [[Number , Number, Number]]},
	fp_plv: {patient_angles : [[ Number , Number]], normal_ranges : [[Number , Number, Number]]},
	fp_hip: {patient_angles : [[ Number , Number]], normal_ranges : [[Number , Number, Number]]},

	tp_kne: {patient_angles : [[ Number , Number]], normal_ranges : [[Number , Number, Number]]},
	tp_ank: {patient_angles : [[ Number , Number]], normal_ranges : [[Number , Number, Number]]},
	tp_plv: {patient_angles : [[ Number , Number]], normal_ranges : [[Number , Number, Number]]},
	tp_hip: {patient_angles : [[ Number , Number]], normal_ranges : [[Number , Number, Number]]},

	sp_kne_high_chart_data : Object,
	sp_ank_high_chart_data : Object,
	sp_plv_high_chart_data : Object,
	sp_hip_high_chart_data : Object,

	fp_kne_high_chart_data : Object,
	fp_ank_high_chart_data : Object,
	fp_plv_high_chart_data : Object,
	fp_hip_high_chart_data : Object,
	
	tp_kne_high_chart_data : Object,
	tp_ank_high_chart_data : Object,
	tp_plv_high_chart_data : Object,
	tp_hip_high_chart_data : Object,

	created_at: { type: Date, default: Date.now }

	//other units
	/*
		TO DO
	*/

});

var KinematicsAnalysis = mongoose.model('KinematicsAnalysis',kinematicsAnalysisSchema);

module.exports = KinematicsAnalysis;