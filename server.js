const express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    Contact = require('./api/models/contactModel'),
    bodyParser = require('body-parser');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/contactListDb');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


const routes = require('./api/routes/contactListRoutes'); //importing route
routes(app); //register the route


app.listen(port);


console.log('contact list RESTful API server started on: ' + port);
