var express = require('express'),
    app = express(),
    backendRouter = require('./config/routes.js');

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE");
  next();
});

app.use(backendRouter);

app.listen(process.env.PORT || 8080, function () {
      console.log('Server started on port: http://localhost:8080/');
    });
