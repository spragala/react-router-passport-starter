const mongoose = require ('mongoose'),
      bcrypt = require ('bcryptjs'),
      Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    index: { unique: true },
  },
  password: {
    type: String,
  },
  email: {
    type: String,
  },
  name: {
    type: String,
  }
});

const User = module.exports = mongoose.model('User', UserSchema);

// From Brad Traversy https://github.com/bradtraversy/

module.exports.createUser = function (newUser, callback) {
  bcrypt.genSalt(10, function (err, salt) {
    bcrypt.hash(newUser.password, salt, function (err, hash) {
      newUser.password = hash;
      newUser.save(callback);
    });
  });
};

module.exports.getUserByUsername = function (username, callback) {
  var query = {
    username: username,
  };
  User.findOne(query, callback);
};

module.exports.getUserById = function (id, callback) {
  User.findById(id, callback);
};

module.exports.comparePassword = function (candidatePassword, hash, callback) {
  bcrypt.compare(candidatePassword, hash, function (err, isMatch) {
    if (err) throw err;
    callback(null, isMatch);
  });
};
