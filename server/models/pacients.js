var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var pacientSchema = new Schema({

  names: String,
  lastname: String,
  gender: String,
  id_Document_type: String,
  id_Document_num: Number,
  birth:  String,

  address: {
  	street: String,
  	city: String,
  	state: String,
  	zip: Number,
  	country: String
  },

  medic_diagostic: [{
    name: String,
    level: String,
    percentage: String,
    created_at: { type: Date, default: Date.now }
  }],

  attorney: {
  	names: String,
  	lastname: String,
  	relationship : String,
  	email: String,
  	phone: String,
  	cellphone: String
   },

  // Will be send by email TO THE ATTORNEY
  username: String,
  password: String,

  created_at: { type: Date, default: Date.now },
  updated_at: String,
  is_active: Boolean,

  medicalCenters : {
    _id: String,
    name: String,
    status_request: String, // pending(0 day to more), accepted 
    requested_at: { type: Date, default: Date.now },
    accepted_at: Date
  }


});

// UserSchema.pre('save', function (next) {
//   email(this.email, 'Your record has changed');
//   next();
// });

var Pacient = mongoose.model('Pacient',pacientSchema);

module.exports = Pacient;




