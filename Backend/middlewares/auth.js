const {getUser} = require ("../service/auth")

async function restrictToLoggedinUserOnly(req,res,next){
    // console.log("req----->",req);
    const userUid = req.cookies?.uid;

    if (!userUid) return res.send("invalid user");
    const user= getUser(userUid);
    if (!user) return res.send("user does not exist");
    req.user = user;
    next();
}

module.exports ={
restrictToLoggedinUserOnly
}