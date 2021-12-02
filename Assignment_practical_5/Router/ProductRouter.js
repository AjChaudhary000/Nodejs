const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const ProductModal = require('../Modal/ProductModal')
// mongoose.connect(process.env.MONGOOES_URL).then(()=>console.log("connected "));
router.use(express.json());
router.post('/',(req,res)=>{
    return res.json({data:'Product Page ...'})
});
router.post('/AddProducts',(req,res)=>{
    const record = req.body;
    ProductModal.create(record)
    return res.json({data:'Product Data Add Sucessfully .....'})
});
module.exports = router;