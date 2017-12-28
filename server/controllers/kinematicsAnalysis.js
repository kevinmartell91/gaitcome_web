
// Load required packages
var KinematicsAnalysis = require('../models/kinematicsAnalysis');
// var sp_plv_high_chart_data = require('../models/kinematicsAnalysis');
// var sp_hip_high_chart_data = require('../models/kinematicsAnalysis');
// var sp_kne_high_chart_data = require('../models/kinematicsAnalysis');
// var sp_ank_high_chart_data = require('../models/kinematicsAnalysis');
// var fp_plv_high_chart_data = require('../models/kinematicsAnalysis');
// var fp_hip_high_chart_data = require('../models/kinematicsAnalysis');
// var fp_kne_high_chart_data = require('../models/kinematicsAnalysis');
// var fp_ank_high_chart_data = require('../models/kinematicsAnalysis');
// var tp_plv_high_chart_data = require('../models/kinematicsAnalysis');
// var tp_hip_high_chart_data = require('../models/kinematicsAnalysis');
// var tp_kne_high_chart_data = require('../models/kinematicsAnalysis');
// var tp_ank_high_chart_data = require('../models/kinematicsAnalysis');

// Create endpoint /api/kinematic_analysis for POST
exports.postKinematicsAnalysiss = function(req, res) {
  // Create a new instance of the KinematicsAnalysis model

  var kinematic_analysis = new KinematicsAnalysis();

  //Set the kinematic_analysis properties that came from the POST data
  kinematic_analysis.patient_id = req.body.patient_id;
  kinematic_analysis.patient_full_name = req.body.patient_full_name;
  kinematic_analysis.medical_center_id = req.body.medical_center_id; // missing teo receive this data
  kinematic_analysis.therapist_id = req.body.therapist_id;
  kinematic_analysis.therapist_full_name = req.body.therapist_full_name;
  kinematic_analysis.patient_descriptions = req.body.patient_descriptions; // there is no UI field to recieve
  kinematic_analysis.date_requested = req.body.date_requested;
  kinematic_analysis.is_done = req.body.is_done;
  kinematic_analysis.accesories = req.body.accesories;
  kinematic_analysis.accesories_descriptions = req.body.accesories_descriptions;
  // kinematic_analysis.hip = req.body.spl_hip;
  // kinematic_analysis.lkne = req.body.lkne;
  // Add the missing ones
  // kinematic_analysis.spl_kne.patient_angles = req.body.spl_kne.patient_angles;
  // kinematic_analysis.spl_kne.normal_ranges = req.body.spl_kne.normal_ranges;

 

  kinematic_analysis.save(function(err) {
    if (err)
      return res.send(err);

    res.json({ message: 'kinematic analysis added', data: kinematic_analysis });
  });
};
 
// Create endpoint /api/kinematic_analysis for GET
exports.getKinematicsAnalysiss = function(req, res) {

  console.log ("IN getKinematicsAnalysiss ");
  var query = {};

  if(req.query.medical_center_id !== ""){
    query.medical_center_id = req.query.medical_center_id;
  }
  if(req.query.patient_id !== ""){
    query.patient_id = req.query.patient_id;
  }
  if(req.query.therapist_id !== ""){
    query.therapist_id = req.query.therapist_id;
  }
  console.log("query to exec", query);


  // var query = KinematicsAnalysis.findOne({ 'medical_center_id': medical_center_id });
  // var searchQuery = {name: {$in: names}};
  KinematicsAnalysis.find(query,function(err, kinematic_analysiss) {
  // KinematicsAnalysis.find(function(err, kinematic_analysis) {
    if (err)
      return res.send(err);
     // console.log("data from server", kinematic_analysiss);
     // console.log("data from server JSON.parse", JSON.parse(kinematic_analysis));
    res.json(kinematic_analysiss);
  });
};

// Create endpoint /api/kinematic_analysis/:kinematics_analysis_id for GET
exports.getKinematicsAnalysis = function(req, res) {

  KinematicsAnalysis.findById(req.params.kinematics_analysis_id, function(err, kinematic_analysis) {
  
    if (err)
      return res.send(err);

    // let result = JSON.stringify({ result: kinematic_analysis });

    res.json(kinematic_analysis);
  });
};

// Create endpoint /api/kinematic_analysis/:kinematics_analysis_id for PUT
exports.putKinematicsAnalysis = function(req, res) {

  KinematicsAnalysis.findById(req.params.kinematics_analysis_id, function(err, kinematic_analysis) {
    if (err) {
      return res.send(err);
    }
    

  kinematic_analysis.patient_descriptions = req.body.patient_descriptions;

  // kinematic_analysis.accesories = {
  //     is_assited_walk: req.body.accesories.is_assited_walk,
  //     is_treadmills: req.body.accesories.is_treadmills,
  //     is_walker: req.body.accesories.is_walker,
  //     is_orthoses: req.body.accesories.is_orthoses,
  //     is_parallel_bars: req.body.accesories.is_parallel_bars
  // };
  
  // kinematic_analysis.accesories_descriptions = {  
  //     assited_walk: req.body.accesories_descriptions.assited_walk,
  //     treadmills: req.body.accesories_descriptions.treadmills,
  //     walker: req.body.accesories_descriptions.walker,
  //     orthoses: req.body.accesories_descriptions.orthoses,
  //     parallel_bars: req.body.accesories_descriptions.parallel_bars
  // };
  //Not send from database
  //   "accesories_descriptions": {  
  //   "assited_walk": "String",
  //   "treadmills": "String",
  //   "walker": "String",
  //   "orthoses": "String",
  //   "parallel_bars": "String"
  // }
  console.log('putKinematicsAnalysis');

  // kinematic_analysis.patient_id = req.body.patient_id;
  // kinematic_analysis.medical_center_id = req.body.medical_center_id;
  // kinematic_analysis.therapist_id = req.body.therapist_id;
  kinematic_analysis.accesories = req.body.accesories;
  // kinematic_analysis.accesories_descriptions = req.body.accesories_descriptions;
  // Add the missing ones
  // if(kinematic_analysis.hasOwnProperty("spl_kne.patient_angles")) {
  //   kinematic_analysis.spl_kne.patient_angles = req.body.spl_kne.patient_angles;
  //   kinematic_analysis.spl_kne.normal_ranges = req.body.spl_kne.normal_ranges;
  // }


  // KinematicsAnalysis.update( 
  //     { _id: eq.params.kinematics_analysis_id }, "spl_kne.patient_angles": "photo2" } }, 
  //     { $set: { "photos.$.data": "yourdata" } }
  // )

  // console.log('fasfdsa');

  // KinematicsAnalysis.update({_id: req.params.kinematics_analysis_id},{'spl_kne.patient_angles' : req.body.spl_kne.patient_angles},function(err, kinematic_analysis) {
  //     if (err)
  // return res.send(err);
  //   console.log(kinematic_analysis);


  // console.log(kinematic_analysis.hasOwnProperty("spl_kne.patient_angles"));
  //   // console.log(kinematic_analysis.lkne.normal_ranges);

    kinematic_analysis.save(function(err,data){
      if(err) 
        return res.send(err);

      res.json({ message: 'kinematic analysis updated',
                 data: data });

    });
  });
};

// Create endpoint /api/kinematic_analysis/:kinematics_analysis_id for DELETE
exports.deleteKinematicsAnalysis = function(req, res) {

  KinematicsAnalysis.findByIdAndRemove(req.params.kinematics_analysis_id, function(err) {
    if (err)
      return res.send(err);

    res.json({ message: 'KinematicsAnalysis removed' });

  });
};

// 
// Create endpoint /api/kinematics_analysis_matlab/:kinematics_analysis_id for POST
exports.postKinematicsAnalysisMatlabGaitAngles = function(req, res) {
  KinematicsAnalysis.findById(
    req.params.kinematics_analysis_id,
    function(err, kinematic_analysis) {

      if(err) {
        return res.send(err);
      }

      // Procesed data: angles of 01 gait cycle
      kinematic_analysis.sp_kne_high_chart_data = req.body.sp_kne_high_chart_data;
      kinematic_analysis.sp_ank_high_chart_data = req.body.sp_ank_high_chart_data;
      kinematic_analysis.sp_plv_high_chart_data = req.body.sp_plv_high_chart_data;
      kinematic_analysis.sp_hip_high_chart_data = req.body.sp_hip_high_chart_data;
      kinematic_analysis.fp_kne_high_chart_data = req.body.fp_kne_high_chart_data;
      kinematic_analysis.fp_ank_high_chart_data = req.body.fp_ank_high_chart_data;
      kinematic_analysis.fp_plv_high_chart_data = req.body.fp_plv_high_chart_data;
      kinematic_analysis.fp_hip_high_chart_data = req.body.fp_hip_high_chart_data;
      kinematic_analysis.tp_kne_high_chart_data = req.body.tp_kne_high_chart_data;
      kinematic_analysis.tp_ank_high_chart_data = req.body.tp_ank_high_chart_data;
      kinematic_analysis.tp_plv_high_chart_data = req.body.tp_plv_high_chart_data;
      kinematic_analysis.tp_hip_high_chart_data = req.body.tp_hip_high_chart_data;

      kinematic_analysis.save(function(res, data) {
        if(err)
          return res.send(err);

        res.json({ message : "kinematic analysis updated with gait angles",
                   data: data  });

      });

    });
};

// Create endpoint /api/kinematics_analysis_matlab/:kinematics_analysis_id for PUT
exports.putKinematicsAnalysisMatlabRawPositions = function(req, res) {

  KinematicsAnalysis.findById(req.params.kinematics_analysis_id,
                              function(err, kinematic_analysis) {
    if (err) {
      return res.send(err);
    }


    // Raw data: all angles extrated which perharps is
    // 01 gait cycle
    kinematic_analysis.lbwt_y = req.body.lbwt_y;
    kinematic_analysis.lbwt_z = req.body.lbwt_z;
    kinematic_analysis.lfwt_x = req.body.lfwt_x;
    kinematic_analysis.lfwt_y = req.body.lfwt_y;
    kinematic_analysis.lfwt_z = req.body.lfwt_z;
    kinematic_analysis.ltrc_x = req.body.ltrc_x;
    kinematic_analysis.ltrc_y = req.body.ltrc_y;
    kinematic_analysis.ltrc_z = req.body.ltrc_z;
    kinematic_analysis.lkne_x = req.body.lkne_x;
    kinematic_analysis.lkne_y = req.body.lkne_y;
    kinematic_analysis.lkne_z = req.body.lkne_z;
    kinematic_analysis.lank_x = req.body.lank_x;
    kinematic_analysis.lank_y = req.body.lank_y;
    kinematic_analysis.lank_z = req.body.lank_z;
    kinematic_analysis.lhee_x = req.body.lhee_x;
    kinematic_analysis.lhee_y = req.body.lhee_y;
    kinematic_analysis.lhee_z = req.body.lhee_z;
    kinematic_analysis.ltoe_x = req.body.ltoe_x;
    kinematic_analysis.ltoe_y = req.body.ltoe_y;
    kinematic_analysis.ltoe_z = req.body.ltoe_z;

    kinematic_analysis.is_done = req.body.is_done;




    kinematic_analysis.save(function(err,data){
      if(err) 
        return res.send(err);

      res.json({ message: 'kinematic analysis feeed with matlab data',
                 data: data });

    });
  });
};

