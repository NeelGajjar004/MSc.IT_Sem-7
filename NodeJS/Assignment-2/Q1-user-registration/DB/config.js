const mongoose = require("mongoose");

mongoose.connect("mongodb://0.0.0.0:27017/UserDB")
    .then(()=>{
        console.log("Connected");
    })
    .catch((err)=>{
        console.log("Not Connected");
    })