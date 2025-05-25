const express = require("express");
const URL = require("../models/url");

const router = express.Router();

router.get("/",async(req,res)=>{
console.log("user---------->",req.user)
if(!req.user) return res.send("User not found.")    
const allurls = await URL.find({createdBy:req.user._id})
return res.send({urls:allurls});
})




module.exports = router;