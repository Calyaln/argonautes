const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const argonauteSchema = new Schema({
  name: String,
});

const Argonaute = mongoose.model("Argonaute", argonauteSchema);

module.exports = Argonaute;
