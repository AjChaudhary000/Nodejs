const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const CompanyModal = require('../Modal/CompanyModal')
router.use(express.json());
router.post('/',(req,res)=>{
    return res.json({data:'Company Page ...'})
});
router.post('/AddCompany',(req,res)=>{
    const record = req.body;
    CompanyModal.create(record)
    return res.json({data:'Companys  Data Add Sucessfully .....'})
});
router.delete('/DltCompany/:Name',(req,res)=>{
    const cmp = req.params.Name;
    const deletecmp = CompanyModal.findOneAndDelete({Name: cmp});
    return res.json({data:'Companys  Data Add Sucessfully .....'+deletecmp});
});
module.exports = router;