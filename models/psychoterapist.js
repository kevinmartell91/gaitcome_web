var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var psycotherapistSchema = new Schema({

  names: String,
  lastname: String,
  gender: String,
  id_Document_type: String,
  id_Document_num: Number,
  birth:  Date,
  email: String,
  phone: String,
  cellphone: String,
  num_ctmp: Number,
  num_ndta: Number,
  is_active: Boolean,

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
    requested_at: { type: Date, default: Date.now }
    accepted_at: Date,
  },

}),

var Psycotherapist = mongoose.model('Psycotherapist',psycotherapistSchema);

module.exports = Psycotherapist;