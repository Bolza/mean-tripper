// app/routes.js

// grab the trip model we just created
var Trip = require('../models/trip');

   module.exports = function(app) {

       // server routes ===========================================================
       // handle things like api calls
       // authentication routes

       // sample api route
       app.get('/api/trips', function(req, res) {
           // use mongoose to get all trips in the database
           res.json(['mocktrip']);
           Trip.find(function(err, trips) {

               // if there is an error retrieving, send the error.
                               // nothing after res.send(err) will execute
               if (err)
                   res.send(err);

               res.json(trips); // return all trips in JSON format
           });
       });

       // route to handle creating goes here (app.post)
       // route to handle delete goes here (app.delete)

       // frontend routes =========================================================
       // route to handle all angular requests
       app.get('*', function(req, res) {
           res.sendfile('./public/views/index.html'); // load our public/index.html file
       });

   };
