var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var TextPostSchema = new Schema({
  title: String,
  content: String,
  thumbnail_image_url: String,
  user:
  {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
});

module.exports = mongoose.model('TextPost', TextPostSchema);
