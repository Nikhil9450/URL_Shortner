const User = require ('../models/user');

async function handleUserSignup(req,res){
    console.log("inside handleUserSignup");
    const {name,email,password}=req.body;
    console.log("req body------>",req.body);

    User.create({
        name,
        email,
        password
    })
    return res.send("user created");
}

module.exports={
    handleUserSignup,
}