
// Load required packages
var Therapist = require('../models/therapists');

// Create endpoint /api/therapists for POST
exports.postTherapists = function(req, res) {
  // Create a new instance of the Therapist model

  var therapist = new Therapist();


  therapist.names = req.body.names;
  therapist.lastname = req.body.lastname;
  therapist.gender = req.body.gender;
  therapist.id_Document_type = req.body.id_Document_type;
  therapist.id_Document_num = req.body.id_Document_num;
  therapist.birth =  req.body.birth;

  therapist.email = req.body.email;
  therapist.phone = req.body.phone;
  therapist.cellphone = req.body.cellphone;
  therapist.num_ctmp = req.body.num_ctmp;
  therapist.num_ndta = req.body.num_ndta;
  therapist.is_active = req.body.is_active;

  therapist.username = req.body.username;
  therapist.password = req.body.password;

  therapist.address = {
    street: req.body.address.street,
    city: req.body.address.city,
    state: req.body.address.state,
    zip: req.body.address.zip,
    country: req.body.address.country
  };

  // to Improve ->history of all the center where 
  // the psycotherapist worked
  // 
  therapist.medicalCenters  = {
    _id: req.body.medicalCenters._id,
    name: req.body.medicalCenters.name,
    status_request: req.body.medicalCenters.status_request, // pending(0 day to more), accepted 
    //requested_at: { type: Date, default: Date.now },
    accepted_at: req.body.accepted_at
  };


  // Save the therapist and check for errors
  therapist.save(function(err) {
    if (err)
      return res.send(err);

    res.json({ message: 'Therapist added', data: therapist });
  });
};

// Create endpoint /api/therapists for GET
exports.getTherapists = function(req, res) {

  var query = {};

  if( query.medical_center_id !== "")
    query.medical_center_id = req.query.medical_center_id;

  Therapist.find(query, function(err, therapists) {
    if (err)
      return res.send(err);

    res.json(therapists);
  });
};

// Create endpoint /api/therapists/:therapist_id for GET
exports.getTherapist = function(req, res) {

  Therapist.findById(req.params.therapist_id, function(err, therapist) {
  console.log(req.body.therapist_id);
  
    if (err)
      return res.send(err);

    res.json(therapist);
  });
};

// Create endpoint /api/therapists/:therapist_id for PUT
exports.putTherapist = function(req, res) {

  Therapist.findById(req.params.therapist_id, function(err, therapist) {
    if (err)
      return res.send(err);

    // console.log("req.body",req.body);
    
    // console.log("therapist DB:", therapist);
    therapist.names = req.body.names;
    therapist.lastname = req.body.lastname;
    therapist.gender = req.body.gender;
    therapist.id_Document_type = req.body.id_Document_type;
    therapist.id_Document_num = req.body.id_Document_num;
    therapist.birth =  req.body.birth;
    

    therapist.email = req.body.email;
    therapist.phone = req.body.phone;
    therapist.cellphone = req.body.cellphone;
    therapist.num_ctmp = req.body.num_ctmp;
    therapist.num_ndta = req.body.num_ndta;
    therapist.is_active = req.body.is_active;


    therapist.address = {
      street: req.body.address.street,
      city: req.body.address.city,
      state: req.body.address.state,
      zip: req.body.address.zip,
      country: req.body.address.country
    };

    // to Improve ->history of all the center where 
    // the psycotherapist worked
    // 
    // therapist.medicalCenters = req.body.medicalCenters;
   


    // therapist.medicalCenters  = {
    //   _id: req.body._id,
    //   name: req.body.name,
    //   status_request: req.body.status_request, // pending(0 day to more), accepted 
    //   //requested_at: { type: Date, default: Date.now },
    //   accepted_at: req.body.accepted_at
    // };

    therapist.save(function(err){
      if(err) 
        return res.send(err);

      res.json({ message: 'Therapist updated', data: therapist });

    });
  });
};

// Create endpoint /api/therapists/:therapist_id for DELETE
exports.deleteTherapist = function(req, res) {

  Therapist.findByIdAndRemove(req.params.therapist_id, function(err) {
    if (err)
      return res.send(err);

    res.json({ message: 'Therapist removed' });

  });
};
