const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const CompanyModal = require('../Modal/CompanyModal')
mongoose.connect(process.env.MONGOOES_URL).then(()=>console.log("connected "));
router.use(express.json());
router.post('/',(req,res)=>{
    return res.json({data:'Company Page ...'})
});
router.post('/AddCompany',(req,res)=>{
    const record = req.body;
    CompanyModal.create(record)
    return res.json({data:'Companys  Data Add Sucessfully .....'})
});
module.exports = router;