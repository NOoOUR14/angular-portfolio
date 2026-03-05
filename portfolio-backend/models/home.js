const mongoose = require("mongoose");

const HomeSchema = new mongoose.Schema({
  heroTitle: String,
  description: String,
  name :String,
  btnText: String
});

module.exports = mongoose.model("Home", HomeSchema);

