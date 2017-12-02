var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var therapistSchema = new Schema({

  names: String,
  lastname: String,
  gender: String,
  id_Document_type: String,
  id_Document_num: Number,
  birth:  String,
  email: String,
  phone: String,
  cellphone: String,
  num_ctmp: Number,
  num_ndta: Number,
  is_active: Boolean,

  // Will be send by email
  username: String,
  password: String,

  address: {
  	street: String,
  	city: String,
  	state: String,
  	zip: Number,
  	country: String
  },

  // to Improve ->history of all the center where 
  // the psycotherapist worked
  // 
  medicalCenters : {
  	_id: String,
    name: String,
    status_request: String, // pending(0 day to more), accepted 
    requested_at: { type: Date, default: Date.now },
    accepted_at: Date
  }

});

var Therapist = mongoose.model('Therapist', therapistSchema);

module.exports = Therapist;
