
// Load required packages
var MedicalCenter = require('../models/medicalCenters');

// Create endpoint /api/medicalCenters for POST
exports.postMedicalCenters = function(req, res) {
  // Create a new instance of the MedicalCenter model

  var medicalCenter = new MedicalCenter();

  //Set the medicalCenter properties that came from the POST data
  medicalCenter.name = req.body.name;
  medicalCenter.tax_identification = req.body.tax_identification;
  medicalCenter.email = req.body.email;
  medicalCenter.country = req.body.country;

  medicalCenter.username = req.body.username;
  medicalCenter.password = req.body.password;

  // Save the medicalCenter and check for errors
  medicalCenter.save(function(err) {
    if (err)
      return res.send(err);

    res.json({ message: 'MedicalCenter added', data: medicalCenter });
  });
};

// Create endpoint /api/medicalCenters for GET
exports.getMedicalCenters = function(req, res) {

  MedicalCenter.find(function(err, medicalCenters) {
    if (err)
      return res.send(err);

    res.json(medicalCenters);
  });
};

// Create endpoint /api/medicalCenters/:medical_center_id for GET
exports.getMedicalCenter = function(req, res) {

  MedicalCenter.findById(req.params.medical_center_id, function(err, medicalCenter) {
  
    if (err)
      return res.send(err);

    res.json(medicalCenter);
  });
};

// Create endpoint /api/medicalCenters/:medical_center_id for PUT
exports.putMedicalCenter = function(req, res) {

  MedicalCenter.findById(req.params.medical_center_id, function(err, medicalCenter) {
    if (err)
      return res.send(err);

    medicalCenter.name = req.body.name;
    medicalCenter.tax_identification = req.body.tax_identification;
    medicalCenter.email = req.body.email;
    medicalCenter.country = req.body.country;

    medicalCenter.save(function(err){
      if(err) 
        return res.send(err);

      res.json({ message: 'MedicalCenter updated' });

    });
  });
};

// Create endpoint /api/medicalCenters/:beer_id for DELETE
exports.deleteMedicalCenter = function(req, res) {

  MedicalCenter.findByIdAndRemove(req.params.medical_center_id, function(err) {
    if (err)
      return res.send(err);

    res.json({ message: 'MedicalCenter removed' });

  });
};
