const mongoose = require("mongoose");

const studentSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String,
    age: Number,
    gender: String
});

module.exports = mongoose.model("Student",studentSchema);