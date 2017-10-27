var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/backend");

module.exports.TextPost = require("./textPost");
