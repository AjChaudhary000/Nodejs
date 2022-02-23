const express = require('express');
const UserModel = require('../Model/UserModel');
const router = express.Router();

router.use(express.json());
router.get('/',(req,res)=>{
    return res.send("user Page ")
})
router.post('/SignUp',(req,res)=>{
    const data = req.body;
    UserModel.create(data);
    return res.json({data:"Sign Up A User ... "})
})
router.post('/SignIn',async(req,res)=>{
    const data =  req.body;
    const list = await UserModel.find(data);
    return res.json({data:list})
})
module.exports = router;