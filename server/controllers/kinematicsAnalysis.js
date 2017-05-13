
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

  kinematics_analysis.save(function(err) {
    if (err)
      return res.send(err);

    res.json({ message: 'kinematic analysis added', data: kinematics_analysis });
  });
};

// Create endpoint /api/kinematics_analysis for GET
exports.getKinematicsAnalysiss = function(req, res) {

  KinematicsAnalysis.find(function(err, kinematics_analysis) {
    if (err)
      return res.send(err);

    res.json(kinematics_analysis);
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
