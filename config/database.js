module.exports = function(mongoose) {

    // When mongodb installed on the same host (localhost)  as MEAN
    // var dbURI = 'mongodb://localhost:27017/myApp';
    
    // Needs mongo docker container ip 
    var dbURI = 'mongodb://admin:admin@ds023495.mlab.com:23495/gaitcome_db';
   
    //var connection = mongoose.createConnection(dbURI,{ server: { poolSize: 5 } });
    var connection = mongoose.connect(dbURI);

    // When successfully connected
    // connection.on('connected', function () {
    //     console.log('Mongoose connection open to ' + dbURI);
    // });

    // // If the connection throws an error
    // connection.on('error',function (err) {
    //     console.log('Mongoose default connection error: ' + err);
    // });

    // // When the connection is disconnected
    // connection.on('disconnected', function () {
    //     console.log('Mongoose default connection disconnected');
    // });

    // // If the Node process ends, close the Mongoose connection
    // process.on('SIGINT', function() {
    //     connection.close(function () {
    //         console.log('Mongoose default connection disconnected through app termination');
    //         process.exit(0);
    //     });
    // });

    return connection;
}