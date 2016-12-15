var app = require('express')();
// used to create, sign, and verify tokens
var jwt    = require('jsonwebtoken'); 
var configJWT = require('../config/jwt');
// secret variable
app.set('superSecret', configJWT.secret); 

var User = require('../models/users');
var Pacient = require('../models/pacients');
var Therapist = require('../models/therapists');
var MedicalCenter = require('../models/medicalCenters');


exports.postAuthenticate = function(req, res) {

	var Entity;
	switch (req.body.login_type){
    case 'user':           Entity = (User); break;
	  case 'pacient':        Entity = (Pacient); break;
	  case 'therapist':      Entity = (Therapist); break;
	  case 'medical_center': Entity = (MedicalCenter);
	}

  // Multilogin
  // find the MedicalCenter / patien / therapist  Login
  Entity.findOne({
    username: req.body.username
  }, function(err, user) {

    if (err) throw err;

    if (!user) {
      res.json({ success: false, message: 'Authentication failed. User not found.' });
    } else if (user) {

      // check if password matches
      if (user.password != req.body.password) {
        res.json({ success: false, message: 'Authentication failed. Wrong password.' });
      } else {

        // if user is found and password is right
        // create a token
        var token = jwt.sign(user, app.get('superSecret'));
        // 	, {
        //   expiresInMinutes: 1440 // expires in 24 hours
        // });

        // return the information including token as JSON
        res.json({
          success: true,
          message: 'Enjoy your token!',
          token: token
        });
      }   

    }

  });
  
};

