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
    return res.send({message:'Invalid User', loggedIn:false})
}else{
    const sessionId =uuidv4();
    console.log("session id",sessionId);
    setUser(sessionId,user)
    res.cookie("uid",sessionId, {
            httpOnly: false,
            sameSite: 'Lax',
            secure: false
        });
    return res.send({message:'Logged In Successfully', loggedIn:true});
}
}

module.exports={
    handleUserSignup,
    handleUserLogin
}