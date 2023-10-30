const route = require("express").Router();
const multer = require("multer");
const User = require("../Model/userModel");

route.get("/registration",(req,res)=>{
    res.render("registration");
})

const storage = multer.diskStorage({
    destination:(req,file,res)=>{
        res(null,"../Q1-user-registration/uploads")
    },
    filename:(req,file,res)=>{
        res(null,Date.now()+"-"+file.originalname)
    }
})

const upload = multer({storage:storage});

route.post("/registration",upload.array('Profile'),async (req,res)=>{
    // console.log(req.files);
    var element;
    var pic = new Array();
    for (let index = 0; index < req.files.length; index++) {
        element = req.files[index];
        pic.push(element.originalname);  
    }
    
    var data = new User({
        UserName:req.body.UserName,
        Email:req.body.Email,
        Password:req.body.Password,
        Profile:pic
    })
    await data.save();
    res.redirect("/");

})


module.exports = route;