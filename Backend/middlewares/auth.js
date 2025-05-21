const {getUser} = require ("../service/auth")

async function restrictToLoggedinUserOnly(req,res,next){
    // console.log("req----->",req);
    const userUid = req.cookies?.uid;

    if (!userUid) return res.send("invalid user");
    const user= getUser(userUid);
    console.log("user----->",user);
    if (!user) return res.send("user does not exist");   
    console.log(" req.user before------>",req.user);
    req.user = user;
    console.log(" req.user after------>",req.user);
    next();
}

async function checkAuth(req,res,next){
    const userUid = req.cookies?.uid;
    const user= getUser(userUid);
    req.user = user;
    next();
}
module.exports ={
restrictToLoggedinUserOnly,
checkAuth
}