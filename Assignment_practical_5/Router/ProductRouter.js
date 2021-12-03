const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const ProductModal = require('../Modal/ProductModal')
// mongoose.connect(process.env.MONGOOES_URL).then(()=>console.log("connected "));
router.use(express.json());
router.post('/',(req,res)=>{
    return res.json({data:'Product  ...'})
});
router.post('/AddProducts',(req,res)=>{
    const record = req.body;
    ProductModal.create(record)
    return res.json({data:'Product Data Add Sucessfully .....'})
});
router.post('/Display',async(req,res)=>{
    const dt = await ProductModal.find();
    return res.json({data:dt})
});
router.put('/UptProducts/:ProductId',async(req,res)=>{
  const id = req.params.ProductId;
    const Title = req.body.Title;
    const Price = req.body.Price;
    const Category = req.body.Category;
    const CompanyId = req.body.CompanyId;
    const SellerId = req.body.SellerId;
    const data = {Title:Title,Price:Price,Category:Category,CompanyId:CompanyId,SellerId:SellerId}
    console.log(data)
   const update =await ProductModal.findOneAndUpdate({ProductId:id},data,{new:true})
    return res.json({data:'Product Data Update Sucessfully .....'})
});
router.delete('/DelProduct/:ProductId',async(req,res)=>{
  const id = req.params.ProductId;
    const del = await ProductModal.findOneAndDelete({ProductId:id},(e)=>{
      if(e){
        console.log("expection ..",e)
      }
    });
    return res.json({data:'Product Data delete Sucessfully .....'})
});
module.exports = router;