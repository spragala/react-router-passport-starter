const express = require('express'),
      app = express(),
      bodyParser = require('body-parser'),
      backendRouter = require('./config/routes.js'),
      cookieParser = require('cookie-parser'),
      expressValidator = require('express-validator'),
      passport = require('passport'),
      session = require('express-session');

// Allow Cross-Origin Resource Sharing
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE");
  next();
});

// Parse body of requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Passport and session middleware
app.use(session({
  secret: 'secret',
  saveUninitialized: false,
  resave: false,
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(expressValidator());

// Use the route file
app.use(backendRouter);

// Start the backend server
app.listen(process.env.PORT || 8080, function () {
      console.log('Server started on port: http://localhost:8080/');
    });
