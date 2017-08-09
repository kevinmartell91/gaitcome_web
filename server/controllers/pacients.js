var Pacient = require('../models/pacients');

// Create endpoint /api/pacients for POST
exports.postPacients= function(req, res) {

  var pacient = new Pacient();
  
  pacient.names = req.body.names;
  pacient.lastname = req.body.lastname;
  pacient.gender = req.body.gender;
  pacient.id_Document_type = req.body.id_Document_type;
  pacient.id_Document_num = req.body.id_Document_num;
  pacient.birth =  req.body.birth;

  pacient.address = {
    street: req.body.address.street,
    city: req.body.address.city,
    state: req.body.address.state,
    zip: req.body.address.zip,
    country: req.body.address.country
  };

  pacient.attorney = {
    names: req.body.attorney.names,
    lastname: req.body.attorney.lastname,
    relationship : req.body.attorney.relationship,
    email: req.body.attorney.email,
    phone: req.body.attorney.phone,
    cellphone: req.body.attorney.cellphone
   };

  pacient.medic_diagostic = [{
    name: req.body.medic_diagostic[0].name,
    level: req.body.medic_diagostic[0].level,
    percentage: req.body.medic_diagostic[0].percentage,
    //created_at: { type: Date, default: Date.now }
  }];


  pacient.username = req.body.username;
  pacient.password = req.body.password;

  //pacient.created_at= { type: Date, default: Date.now },
  //pacient.updated_at= Date,
  pacient.is_active = req.body.is_active;
      

  pacient.save(function(err) {
    if (err) {
      console.log("postPacients() - error ");
      return res.send(err);
    }

    res.json({ message : 'Pacient added' , data : pacient });
  });
};

// Create endpoint /api/pacients for GET
exports.getPacients = function(req, res) {

  Pacient.find(function(err, pacients) {
    if(err)
      return res.send(err);

    res.json(pacients)
  });
};

// Create endpoint /api/pacients/:pacient_id for GET
exports.getPacient = function(req, res) {

  Pacient.findById(req.params.pacient_id, function(err, pacient) {
    if(err)
      return json.send(err);

    res.json(pacient);
  });
};

// Create endpoint /api/pacients/:pacient_id for PUT
exports.putPacient = function(req, res) {

  Pacient.findById(req.params.pacient_id, function(err, pacient) {
    if(err)
      req.send(err);

    pacient.names = req.body.names;
    pacient.lastname = req.body.lastname;
    pacient.gender = req.body.gender;
    pacient.id_Document_type = req.body.id_Document_type;
    pacient.id_Document_num = req.body.id_Document_num;
    pacient.birth =  req.body.birth;
    
    pacient.address = {
      street: req.body.street,
      city: req.body.city,
      state: req.body.state,
      zip: req.body.zip,
      country: req.body.country
    };

    pacient.attorney = {
      names: req.body.names,
      lastname: req.body.lastname,
      relationship : req.body.relationship,
      email: req.body.email,
      phone: req.body.phone,
      cellphone: req.body.cellphone
     };

    pacient.medic_diagostic = [{
      name: req.body.name,
      level: req.body.level,
      percentage: req.body.percentage,
      //created_at: { type: Date, default: Date.now }
    }];

    pacient.username = req.body.username;
    pacient.password = req.body.password;

    //pacient.created_at= { type: Date, default: Date.now },
    //pacient.updated_at= Date,
    pacient.is_active = req.body.is_active;

    pacient.save(function(err) {
      if(err)
        return res.send(err);

      res.json({ message : 'Pacient updated'});
    });
  });
};

exports.deletePacient = function(req, res) {
  Pacient.findByIdAndRemove(req.params.pacient_id, function(err) {
    if(err)
      return res.send(err);

    res.json({ message: 'Pacient deleted' });
  });
};













