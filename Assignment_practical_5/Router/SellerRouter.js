const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const SellerModal = require('../Modal/SellerModal')
mongoose.connect(process.env.MONGOOES_URL).then(()=>console.log("connected "));
router.use(express.json());
router.post('/',(req,res)=>{
    return res.json({data:'seller Page ...'})
});
router.post('/AddSeller',(req,res)=>{
    const record = req.body;
    SellerModal.create(record)
    return res.json({data:'Seller Data Add Sucessfully .....'})
});
module.exports = router;