var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var TextPostSchema = new Schema({
  title: String,
  content: String,
  thumbnail_image_url: String,
  votes: Number
});

module.exports = mongoose.model('TextPost', TextPostSchema);
