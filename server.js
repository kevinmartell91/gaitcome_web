// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
var mongoose = require('mongoose');

// Connect to Mongo database
var connection = require('./server/config/database')(mongoose);
//var models = require('./models/users')(connection);

// Get our API routes
const api = require('./server/routes/api');

const app = express();


// Parsers for POST data
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({ extended: false }));

// use morgan to log requests to the console
app.use(morgan('dev'));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'client/dist')));

//set the cors;
// http://restlet.com/company/blog/2015/12/15/understanding-and-using-cors/
app.use(cors());

// Set our api routes
app.use('/api', api);

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/dist/index.html'));
});

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '8080';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));
