
// Load required packages
var User = require('../models/users');

// Create endpoint /api/users for POST
exports.postUsers = function(req, res) {
  // Create a new instance of the User model

  var user = new User();

  //Set the user properties that came from the POST data
  user.name = req.body.name;
  user.type = req.body.type;
  user.quantity = req.body.quantity;
  user.userId = req.body.userId;
  user.password = req.body.password;

  // Save the user and check for errors
  user.save(function(err) {
    if (err)
      return res.send(err);

    res.json({ message: 'User added', data: user });
  });
};

// Create endpoint /api/users for GET
exports.getUsers = function(req, res) {

  User.find(function(err, users) {
    if (err)
      return res.send(err);

    res.json(users);
  });
};

// Create endpoint /api/users/:user_id for GET
exports.getUser = function(req, res) {

  User.findById(req.params.user_id, function(err, user) {
  
    if (err)
      return res.send(err);

    res.json(user);
  });
};

// Create endpoint /api/users/:user_id for PUT
exports.putUser = function(req, res) {

  User.findById(req.params.user_id, function(err, user) {
    if (err)
      return res.send(err);

    user.quantity = req.body.quantity;

    user.save(function(err){
      if(err) 
        return res.send(err);

      res.json({ message: 'User updated' });

    });
  });
};

// Create endpoint /api/users/:beer_id for DELETE
exports.deleteUser = function(req, res) {

  User.remove(req.params.user_id, function(err) {
    if (err)
      return res.send(err);

    res.json({ message: 'User removed' });

  });
};

