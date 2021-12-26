const express = require('express')
const router = express.Router();
router.use(express.json());
const UserModal = require("../Modal/UsersModal");
router.post("/loginStudent",async(req,res)=>{
   const data = req.body;
   const list = await UserModal.find(data)
return res.json({data:list});
})
module.exports = router;