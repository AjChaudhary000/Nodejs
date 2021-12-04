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
router.get('/Display',async(req,res)=>{
    const dt = await CompanyModal.find();
    return res.json({data:dt})
});
router.put('/UptCompany/:CompanyId',async(req,res)=>{
  const id = req.params.CompanyId;
    
    const data = req.body;
    console.log(data)
   const update =await CompanyModal.findOneAndUpdate({CompanyId:id},data,{new:true})
    return res.json({data:'Company Data Update Sucessfully .....'})
});
router.delete('/DelCompany/:CompanyId',async(req,res)=>{
  const id = req.params.CompanyId;
    const del = await CompanyModal.findOneAndDelete({CompanyId:id},(e)=>{
      if(e){
        console.log(e)
      }
    });
    return res.json({data:'Company Data delete Sucessfully .....'})
});
module.exports = router;