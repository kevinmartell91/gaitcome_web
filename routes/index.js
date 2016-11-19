
var express = require('express');
var router = express.Router();
var path = require('path');

var userController = require('../controllers/user');

// Create endpoint handlers for /users/:beer_id
router.route('/users/:user_id')
  .get( userController.getUser)
  .put( userController.putUser)
  .delete( userController.deleteUser);

//Create endpoint handlers for /users
router.route('/users')
  .post(userController.postUsers)
  .get(userController.getUsers);

module.exports = router;
