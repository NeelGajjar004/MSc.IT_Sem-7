const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    UserName:String,
    Email:String,
    Password:String,
    Profile:[String]
});

module.exports = mongoose.model("User",userSchema);