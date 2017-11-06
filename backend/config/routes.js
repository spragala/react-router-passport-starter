var express = require('express'),
    router = express.Router(),
    textPostsController = require('../controllers/textPosts');
    usersController = require('../controllers/users');

//User Routes
router.post('/signup', usersController.create);
router.post('/login', usersController.login);

//Post Routes
router.get('/api/posts', textPostsController.index);

function checkAuth(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  } else {
    req.flash('error_msg', 'You are not logged in');
    res.redirect('/users/login');
  }
}

module.exports = router;
