const models = require('../models'),
      TextPost = models.TextPost;

function index(req, res) {
  TextPost.find({}, function(err, textPosts) {
    if (err) res.send(err);
    else res.json(textPosts);
  });
}

function create(req, res) {
  console.log("Hello, here's the req.body: ", req.body)
  TextPost.create(req.body, function(err, newTextPost) {
    if (err) { res.send(err)}
    else res.json(newTextPost)
  });
}

module.exports ={
  index: index,
  create: create,
}
