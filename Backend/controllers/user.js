const User = require ('../models/user');
const { v4: uuidv4 } = require('uuid');
const {setUser} = require("../service/auth")
async function handleUserSignup(req,res){
    console.log("inside handleUserSignup");
    const {name,email,password}=req.body;
    console.log("Signup body------>",req.body);

    User.create({
        name,
        email,
        password
    })
    return res.send("user created");
}

async function handleUserLogin(req,res){
const {email,password}=req.body;
console.log("login body --------->",req.body)
const user =await User.findOne({email,password});
if(!user){
    return res.send("User is not registered.")
}else{
    const sessionId =uuidv4();
    setUser(sessionId,user)
    res.cookie("uid",sessionId);
    return res.send("logged in successfully");
}
}

module.exports={
    handleUserSignup,
    handleUserLogin
}