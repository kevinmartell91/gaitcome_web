// used to create, sign, and verify tokens
// sample =>https://scotch.io/tutorials/authenticate-a-node-js-api-with-json-web-tokens
const jwt    = require('jsonwebtoken'); 
const configJWT = require('./config/jwt');

// // route middleware to verify a token
// router.use(function(req, res, next) {

//   console.log(`route middleware to verify a token : ${req.headers['x-access-token']}`);
//   console.log(`route middleware to verify a token from ws : ${req.headers['x-access-token']}`);
//   // check header or url parameters or post parameters for token
  
//   // from server 8080
//   var token = req.body.token || req.query.token || req.headers['x-access-token'];
  
//   // from postman
//   //var token = req.body.token || req.query.token || req.headers['x-access-token'];

//   // decode token
//   if (token) {

//     // verifies secret and checks exp
//     jwt.verify(token, app.get('superSecret'), function(err, decoded) {      
//       if (err) {
//         return res.json({ success: false, message: 'Failed to authenticate token.' });    
//       } else {
//         // if everything is good, save to request for use in other routes
//         // req.decoded = decoded;    
//         // console.log(`server req.decoded kevin : ${req.decoded}`);
//         next();
//       }
//     });

//   } else {

//     // if there is no token
//     // return an error
//     return res.status(403).send({ 
//         success: false, 
//         message: 'No token provided.' 
//     });
    
//   }
// });  

module.exports = {
  validateToken: (req, res, next) => {
    const authorizationHeaader = req.body.token || req.query.token || req.headers['x-access-token'];
    let result;
    if (authorizationHeaader) {
      const token = authorizationHeaader; // Bearer <token>
      const options = {
        expiresIn: '2d',
        // issuer: 'ilovescotchyscotch'
      };
      try {
        // verify makes sure that the token hasn't expired and has been issued by us
        result = jwt.verify(token, configJWT.secret, options);

        // Let's pass back the decoded token to the request object
        req.decoded = result;
        // We call next to pass execution to the subsequent middleware
        next();
      } catch (err) {
        // Throw an error just in case anything goes wrong with verification
        throw new Error(err);
      }
    } else {
      result = { 
        error: `Authentication error. Token required.`,
        status: 401
      };
      res.status(401).send(result);
    }
  }
};