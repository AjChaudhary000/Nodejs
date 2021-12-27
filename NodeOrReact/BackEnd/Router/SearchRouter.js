const express = require('express')
const router = express.Router();
router.use(express.json());
const UserModal = require("../Modal/UsersModal");
router.post("/searchStudent",async(req,res)=>{
    const search = req.body;
    const list  = await UserModal.find();
  const searchdt =  list.filter(item=>{return ((item.UserName).includes(search.Searchname) || (item.MobileNo).includes(search.Searchname ) || (item.Address).includes(search.Searchname))})
   return  res.json({data:searchdt}) 
})
module.exports = router;