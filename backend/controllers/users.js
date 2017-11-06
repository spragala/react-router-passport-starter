var models = require('../models');
var User = models.User;
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

function create (req, res) {
  var name = req.body.name;
    var email = req.body.email;
    var username = req.body.username;
    var password = req.body.password;
    var password2 = req.body.password2;

    // Validations
    req.checkBody('name', 'Name is required').notEmpty();
    req.checkBody('email', 'Email address is required').notEmpty();
    req.checkBody('email', 'Email address is not vaild').isEmail();
    req.checkBody('username', 'Username is required').notEmpty();
    req.checkBody('password', 'A password is required').notEmpty();
    req.checkBody('password2', 'Passwords do not match').equals(req.body.password);

  let errors = req.validationErrors();
  if (errors) {
    res.status(400).json(errors)
  } else {
    var newUser = new User({
      name: name,
      email: email,
      username: username,
      password: password
    })

    User.createUser(newUser, function (err, user) {
        if (err) throw err;
        res.status(200).json({
          user: user,
          message: 'Sign up successful!'
        })
    });
  }
}; // <-- create

passport.use(new LocalStrategy(

  function (username, password, done) {
    console.log("this is the user: ", username)
    User.getUserByUsername(username, function (err, user) {
      if (err) throw err;
      if (!user) {
        return done(null, false, {
          message: 'Unknown User',
        });
      }

      User.comparePassword(password, user.password, function (err, isMatch) {
        if (err) throw err;
        if (isMatch) {
          return done(null, user);
        } else {
          return done(null, false, {
            message: 'Invalid password',
          });
        }
      });
    });
  }

));

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  User.getUserById(id, function (err, user) {
    done(err, user);
  });
});

function login (req, res, next) {
  return passport.authenticate('local', (err) => {
    if (err) {
      return res.status(400).json({
        success: false,
        message: 'Could not process the form.'
      });
    }
    return res.status(200).json({
      success: true,
      message: 'You did it!'
    })
  })(req, res, next);
}

module.exports.create = create;
module.exports.login = login;
