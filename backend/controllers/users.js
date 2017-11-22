const models = require('../models'),
      User = models.User,
      passport = require('passport'),
      LocalStrategy = require('passport-local').Strategy;

// Signup
function signup (req, res) {

  // Validations
  req.check('name', 'Name is required').notEmpty();
  req.check('email', 'Email address is required').notEmpty();
  req.check('email', 'Email address is not vaild').isEmail();
  req.check('username', 'Username is required').notEmpty();
  req.check('password', 'A password is required').notEmpty();
  req.check('password2', 'Passwords do not match').equals(req.body.password);

  let errors = req.validationErrors();
  if (errors) {
    res.json({
      errors: errors,
      success: false
    })
  } else {
    var newUser = new User({
      name: req.body.name,
      email: req.body.email,
      username: req.body.username,
      password: req.body.password
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

// Passport strategy
passport.use(new LocalStrategy(
  function (username, password, done) {
    User.getUserByUsername(username, function (err, user) {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false);
      }

      User.comparePassword(password, user.password, function (err, isMatch) {
        if (err) { return done(err); }

        if (isMatch) {
          return done(null, user);
        } else {
          return done(null, false);
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

// Login
function login (req, res, next) {
  return passport.authenticate('local', (err, user) => {
    if (err) {
      return res.status(400).json({
        success: false,
        message: 'Could not process the form.',
        error: err
      });
    }

    if (!user) {
      return res.json({
        success: false,
        message: 'Incorrect username or password'
      })
    }

    req.logIn(user, function(err) {
      if (err) return next(err);
    })
    return res.status(200).json({
      success: true,
      message: 'Login successful!',
      user: req.user
    })
  })(req, res, next);
}

module.exports = {
  signup: signup,
  login: login
}
