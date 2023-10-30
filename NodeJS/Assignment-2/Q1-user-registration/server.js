const express = require("express");
const app = express();

require("./DB/config");
const userRoute = require("./Routes/userRoute");

const path = require('path');
app.use(express.static(path.join(__dirname,"/uploads")));
app.use(express.urlencoded({extended:false}));

app.set("view engine",'ejs');

app.use("/",userRoute);

app.listen(8000,()=>{
    console.log("Server on 8000");
})