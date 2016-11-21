
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


  therapist.address = {
    street: req.body.street,
    city: req.body.city,
    state: req.body.state,
    zip: req.body.zip,
    country: req.body.country
  };

  // to Improve ->history of all the center where 
  // the psycotherapist worked
  // 
  therapist.medicalCenters  = {
    _id: req.body._id,
    name: req.body.name,
    status_request: req.body.status_request, // pending(0 day to more), accepted 
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

  Therapist.find(function(err, therapists) {
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

    
    therapist.names = req.body.names;
    therapist.lastname = req.body.lastname;
    therapist.gender = req.body.gender;
    therapist.id_Document_type = req.body.id_Document_type;
    therapist.id_Document_num = req.body.id_Document_num;
    therapist.birth =  req.body.birth;
    console.log("postPacients() - end params ");
    

    therapist.email = req.body.email;
    therapist.phone = req.body.phone;
    therapist.cellphone = req.body.cellphone;
    therapist.num_ctmp = req.body.num_ctmp;
    therapist.num_ndta = req.body.num_ndta;
    therapist.is_active = req.body.is_active;


    therapist.address = {
      street: req.body.street,
      city: req.body.city,
      state: req.body.state,
      zip: req.body.zip,
      country: req.body.country
    };

    // to Improve ->history of all the center where 
    // the psycotherapist worked
    // 
    therapist.medicalCenters  = {
      _id: req.body._id,
      name: req.body.name,
      status_request: req.body.status_request, // pending(0 day to more), accepted 
      //requested_at: { type: Date, default: Date.now },
      accepted_at: req.body.accepted_at
    };

    therapist.save(function(err){
      if(err) 
        return res.send(err);

      res.json({ message: 'Therapist updated' });

    });
  });
};

// Create endpoint /api/therapists/:therapist_id for DELETE
exports.deleteTherapist = function(req, res) {

  Therapist.remove(req.params.therapist_id, function(err) {
    if (err)
      return res.send(err);

    res.json({ message: 'Therapist removed' });

  });
};
