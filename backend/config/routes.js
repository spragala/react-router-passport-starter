var express = require('express'),
    router = express.Router(),
    textPostsController = require('../controllers/textPosts');
    usersController = require('../controllers/users');

//User Routes
router.post('/signup', usersController.signup);
router.post('/login', usersController.login);

//Post Routes
router.get('/api/posts/:id', textPostsController.index);
router.post('/api/posts', textPostsController.create);
router.put('/api/posts/:post_id', textPostsController.update)
router.delete('/api/posts/:post_id', textPostsController.destroy);

module.exports = router;
