 const shortid = require("shortid");
 const URL = require('../models/url');

 async function handleGenerateNewShortURL(req,res){
    const body = req.body;
    console.log("body--------->",body);
    if(!body.url)return res.status(400).json({error:'url is required'});
    const shortId=shortid();
    await URL.create({
        shortId:shortId,
        redirectURL:body.url,
        visitHistory:[],
        createdBy:req.user._id,
    });
    return res.json({id:shortId})
 }

async function handleGetAnalytics(req,res){
   const shortId = req.params.shortId;
   console.log("shortId------->",shortId);
   const result = await URL.findOne({shortId});
   return res.json({
      totalClicks : result.visitHistory.length,
      analytics:result.visitHistory,
   })
    
}

 module.exports={
    handleGenerateNewShortURL,
    handleGetAnalytics
 }