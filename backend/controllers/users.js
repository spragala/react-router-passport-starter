var models = require('../models');
var User = models.User;
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;


function create (req, res) {
  console.log('create')
  res.status(200)
}

module.exports.create = create;
