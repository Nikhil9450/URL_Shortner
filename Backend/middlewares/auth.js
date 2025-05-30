const {getUser} = require ("../service/auth")
const jwt = require('jsonwebtoken');
require('dotenv').config();


const secretKey = process.env.JWT_SECRET || 'your-secret-key';
async function restrictToLoggedinUserOnly(req,res,next){
    // console.log("req----->",req);
    const userUid = req.cookies?.uid;
    const token = req.cookies?.token;
    // if (!userUid) return res.send("invalid user");
    if (!token) return res.status(401).send("Invalid user");
    // const user= getUser(userUid);
    try {
        const user = jwt.verify(token, secretKey);
        console.log(user);
        console.log(" req.user before------>",req.user);
        req.user = user;
        console.log(" req.user after------>",req.user);
        next();
    } catch (err) {
        console.error('Token invalid or expired:', err.message);
        return res.status(403).send("User not authorized");
    }
}

async function checkAuth(req,res,next){
    // console.log("inside check auth")
    const userUid = req.cookies?.uid;
    const user= getUser(userUid);
    // console.log("userUid",userUid)
    // console.log("user",user)
    req.user = user;
    next();
}
module.exports ={
restrictToLoggedinUserOnly,
checkAuth
}