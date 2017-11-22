var express = require('express'),
    router = express.Router(),
    textPostsController = require('../controllers/textPosts');
    usersController = require('../controllers/users');

//User Routes
router.post('/signup', usersController.signup);
router.post('/login', usersController.login);

//Post Routes
router.get('/api/posts', textPostsController.index);
router.post('/api/posts', textPostsController.create);

module.exports = router;
