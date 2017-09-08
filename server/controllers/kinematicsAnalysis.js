
// Load required packages
var KinematicsAnalysis = require('../models/kinematicsAnalysis');

// Create endpoint /api/kinematics_analysis for POST
exports.postKinematicsAnalysiss = function(req, res) {
  // Create a new instance of the KinematicsAnalysis model

  var kinematics_analysis = new KinematicsAnalysis();

  //Set the kinematics_analysis properties that came from the POST data
  kinematics_analysis.patient_id = req.body.patient_id;
  kinematics_analysis.medical_center_id = req.body.medical_center_id;
  kinematics_analysis.therapist_id = req.body.therapist_id;
  kinematics_analysis.accesories = req.body.accesories;
  kinematics_analysis.accesories_descriptions = req.body.accesories_descriptions;
  kinematics_analysis.hip = req.body.spl_hip;
  kinematics_analysis.lkne = req.body.lkne;
  // Add the missing ones
  kinematics_analysis.spl_kne.patient_angles = req.body.spl_kne.patient_angles;
  kinematics_analysis.spl_kne.normal_ranges = req.body.spl_kne.normal_ranges;

  kinematics_analysis.sp_kne_high_chart_data = req.body.sp_kne_high_chart_data;
  kinematics_analysis.sp_ank_high_chart_data = req.body.sp_ank_high_chart_data;
  kinematics_analysis.sp_plv_high_chart_data = req.body.sp_plv_high_chart_data;
  kinematics_analysis.sp_hip_high_chart_data = req.body.sp_hip_high_chart_data;
  kinematics_analysis.fp_kne_high_chart_data = req.body.fp_kne_high_chart_data;
  kinematics_analysis.fp_ank_high_chart_data = req.body.fp_ank_high_chart_data;
  kinematics_analysis.fp_plv_high_chart_data = req.body.fp_plv_high_chart_data;
  kinematics_analysis.fp_hip_high_chart_data = req.body.fp_hip_high_chart_data;
  kinematics_analysis.tp_kne_high_chart_data = req.body.tp_kne_high_chart_data;
  kinematics_analysis.tp_ank_high_chart_data = req.body.tp_ank_high_chart_data;
  kinematics_analysis.tp_plv_high_chart_data = req.body.tp_plv_high_chart_data;
  kinematics_analysis.tp_hip_high_chart_data = req.body.tp_hip_high_chart_data;

  kinematics_analysis.save(function(err) {
    if (err)
      return res.send(err);

    res.json({ message: 'kinematic analysis added', data: kinematics_analysis });
  });
};
 
// Create endpoint /api/kinematics_analysis for GET
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
  KinematicsAnalysis.find(query,function(err, kinematics_analysiss) {
  // KinematicsAnalysis.find(function(err, kinematics_analysis) {
    if (err)
      return res.send(err);
     // console.log("data from server", kinematics_analysiss);
     // console.log("data from server JSON.parse", JSON.parse(kinematics_analysis));
    res.json(kinematics_analysiss);
  });
};

// Create endpoint /api/kinematics_analysis/:kinematics_analysis_id for GET
exports.getKinematicsAnalysis = function(req, res) {

  KinematicsAnalysis.findById(req.params.kinematics_analysis_id, function(err, kinematics_analysis) {
  
    if (err)
      return res.send(err);

    // let result = JSON.stringify({ result: kinematics_analysis });

    res.json(kinematics_analysis);
  });
};

// Create endpoint /api/kinematics_analysis/:kinematics_analysis_id for PUT
exports.putKinematicsAnalysis = function(req, res) {

  KinematicsAnalysis.findById(req.params.kinematics_analysis_id, function(err, kinematics_analysis) {
    if (err)
      return res.send(err);

  
  console.log(kinematics_analysis);

  kinematics_analysis.patient_id = req.body.patient_id;
  kinematics_analysis.medical_center_id = req.body.medical_center_id;
  kinematics_analysis.therapist_id = req.body.therapist_id;
  kinematics_analysis.accesories = req.body.accesories;
  kinematics_analysis.accesories_descriptions = req.body.accesories_descriptions;
  // Add the missing ones
  // if(kinematics_analysis.hasOwnProperty("spl_kne.patient_angles")) {
  //   kinematics_analysis.spl_kne.patient_angles = req.body.spl_kne.patient_angles;
  //   kinematics_analysis.spl_kne.normal_ranges = req.body.spl_kne.normal_ranges;
  // }


  // KinematicsAnalysis.update( 
  //     { _id: eq.params.kinematics_analysis_id }, "spl_kne.patient_angles": "photo2" } }, 
  //     { $set: { "photos.$.data": "yourdata" } }
  // )

  // console.log('fasfdsa');

  // KinematicsAnalysis.update({_id: req.params.kinematics_analysis_id},{'spl_kne.patient_angles' : req.body.spl_kne.patient_angles},function(err, kinematics_analysis) {
  //     if (err)
  // return res.send(err);
  //   console.log(kinematics_analysis);


  // console.log(kinematics_analysis.hasOwnProperty("spl_kne.patient_angles"));
  //   // console.log(kinematics_analysis.lkne.normal_ranges);

    kinematics_analysis.save(function(err){
      if(err) 
        return res.send(err);

      res.json({ message: 'kinematic analysis updated' });

    });
  });
};

// Create endpoint /api/kinematics_analysis/:kinematics_analysis_id for DELETE
exports.deleteKinematicsAnalysis = function(req, res) {

  KinematicsAnalysis.findByIdAndRemove(req.params.kinematics_analysis_id, function(err) {
    if (err)
      return res.send(err);

    res.json({ message: 'KinematicsAnalysis removed' });

  });
};
