const models = require('../models'),
      TextPost = models.TextPost;

function index(req, res) {
  let userId = req.params.id;
  TextPost.find({user: userId}, function(err, textPosts) {
    if (err) res.send(err)
    else res.json(textPosts);
  });
}

function create(req, res) {
  TextPost.create(req.body, function(err, newTextPost) {
    if (err) {res.send(err)}
    else res.json(newTextPost);
  });
}

function update(req, res) {
  TextPost.findByIdAndUpdate(req.params.post_id,
    {$set: req.body}, function(err, updatedTextPost){
    if (err) throw err;
    else res.json(updatedTextPost);
  });
}

function destroy(req, res) {
  TextPost.findByIdAndRemove(req.params.post_id, function(err, foundPost) {
    if (err) {res.send(err)}
    else res.send(foundPost);
  });
}

module.exports ={
  index: index,
  create: create,
  update: update,
  destroy: destroy,
}
