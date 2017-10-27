var express = require('express'),
    router = express.Router(),
    textPostsController = require('../controllers/textPosts');

//Post Routes
router.get('/api/posts', textPostsController.index);

module.exports = router;
