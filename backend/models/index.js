var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/backend", {
  useMongoClient: true,
});

module.exports.TextPost = require("./textPost");
