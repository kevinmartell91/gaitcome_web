
// Load required packages
var KinematicsAnalysis = require('../models/kinematicsAnalysis');

// Create endpoint /api/kinematics_analysis for POST
exports.postKinematicsAnalysiss = function(req, res) {
  // Create a new instance of the KinematicsAnalysis model

  var kinematics_analysis = new KinematicsAnalysis();
 console.log('postKinematicsAnalysiss()');
  //Set the kinematics_analysis properties that came from the POST data
  //kinematics_analysis.lkne = req.body.lkne;
  var json = JSON.stringify(eval(req.body.spl_knee));
  console.log(req.body.spl_kne);
  console.log(json);
  kinematics_analysis.spl_knee = json;

  // Save the kinematics_analysis and check for errors
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

    res.json(kinematics_analysis);
  });
};

// Create endpoint /api/kinematics_analysis/:kinematics_analysis_id for PUT
exports.putKinematicsAnalysis = function(req, res) {

  KinematicsAnalysis.findById(req.params.kinematics_analysis_id, function(err, kinematics_analysis) {
    if (err)
      return res.send(err);

    kinematics_analysis.quantity = req.body.quantity;

    kinematics_analysis.save(function(err){
      if(err) 
        return res.send(err);

      res.json({ message: 'kinematic analysis updated' });

    });
  });
};

// Create endpoint /api/kinematics_analysis/:kinematics_analysis_id for DELETE
exports.deleteKinematicsAnalysis = function(req, res) {

  KinematicsAnalysis.remove(req.params.kinematics_analysis_id, function(err) {
    if (err)
      return res.send(err);

    res.json({ message: 'KinematicsAnalysis removed' });

  });
};
