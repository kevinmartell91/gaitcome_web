// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var userSchema = new Schema({
  username: String,
  password: String,
  type: String,
  quantity: Number,
  userId: String
  
});

// // on every save, add the date
// userSchema.pre('save', function(next) {
//   // get the current date
//   var currentDate = new Date();
  
//   // change the updated_at field to current date
//   this.updated_at = currentDate;

//   // if created_at doesn't exist, add to that field
//   if (!this.created_at)
//     this.created_at = currentDate;

//   next();
// });

// the schema is useless so far
// we need to create a model using it
var User = mongoose.model('User', userSchema);

// make this available to our users in our Node applications
module.exports = User;