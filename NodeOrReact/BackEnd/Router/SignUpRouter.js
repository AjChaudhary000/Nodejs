const { json } = require('express');
const express = require('express')
const router = express.Router();
router.use(express.json());
const UserModal = require("../Modal/UsersModal");
router.post("/signupStudent",(req,res)=>{
   const studentDetail = req.body;
   console.log(studentDetail);
   UserModal.create(studentDetail);
   return res.json({data:"insert"})
});
module.exports = router;
