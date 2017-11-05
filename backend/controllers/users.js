var models = require('../models');
var User = models.User;
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;


function create (req, res) {
  console.log(req.body)

  let name = req.body.name;
  req.checkBody('name', 'Name required' ).notEmpty();

  let errors = req.validationErrors();
  if (errors) {
    res.status(400).json(errors)
  } else {
    var newUser = new User({
      name: name
    })
    newUser.save();
  }
  res.status(200).json(newUser)
}

module.exports.create = create;
