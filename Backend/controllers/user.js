const User = require ('../models/user');
const { v4: uuidv4 } = require('uuid');
const {setUser} = require("../service/auth")

const jwt = require('jsonwebtoken');
require('dotenv').config();
const secretKey=process.env.JWT_SECRET;

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
    console.log(user)
    const payload = {
                    id: user._id,
                    name: user.name,
                    email: user.email,
                    };
    // const sessionId =uuidv4();
    const token = jwt.sign(payload, secretKey, { expiresIn: '1h' });
    console.log("token----------->",token);
    // console.log("session id",sessionId);
    // setUser(sessionId,user)
    res.cookie("uid",token, {
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