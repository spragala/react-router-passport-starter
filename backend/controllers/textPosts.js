const models = require('../models'),
      TextPost = models.TextPost;

function index(req, res) {
  let userId = req.params.id
  TextPost.find({user: userId}, function(err, textPosts) {
    if (err) res.send(err);
    else res.json(textPosts);
  });
}

function create(req, res) {
  TextPost.create(req.body, function(err, newTextPost) {
    if (err) { res.send(err)}
    else res.json(newTextPost)
  });
}

module.exports ={
  index: index,
  create: create,
}
