const express = require('express')
const router = express.Router();
router.use(express.json());
const UserModal = require("../Modal/UsersModal");
router.post("/StudentDetails",async(req,res)=>{
    const list  = await UserModal.find();
   return  res.json({data:list}) 
})
module.exports = router;