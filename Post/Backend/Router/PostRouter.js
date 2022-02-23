const express = require('express');
const PostModel = require('../Model/PostModel');
const router = express.Router();
router.use(express.json());

router.get('/',(req,res)=>{
    return res.send("Post  Page ")
})
router.post('/AddPost',(req,res)=>{
    const data = req.body;
    PostModel.create(data);
    return res.json({data:"Data Add  ... "})
})
router.post('/PostFetch',async(req,res)=>{
   const data = await PostModel.find();
    return res.json({data:data})
})
router.post('/MyPostFetch',async(req,res)=>{
    const id = req.body;
    const data = await PostModel.find(id);
     return res.json({data:data})
 })
 router.delete('/MyPostDelete',async(req,res)=>{
    const id = req.body;
    const data = await PostModel.findOneAndDelete(id);
     return res.json({data:data})
 })
module.exports = router;