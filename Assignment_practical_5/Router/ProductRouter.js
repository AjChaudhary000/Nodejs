const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const ProductModal = require('../Modal/ProductModal')
const CompanyModal = require('../Modal/CompanyModal')
const SellerModal = require('../Modal/SellerModal')
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
router.get('/Display/CompanyDetails/:Title',async(req,res)=>{
    const name =  req.params.Title;
    const dt = await ProductModal.find({Title:name});
    const list = await CompanyModal.find({CompanyId:dt[0].CompanyId});
    return res.json({data:list})
});
router.get('/Display/SellerDetails/:Title',async(req,res)=>{
  const name =  req.params.Title;
  const dt = await ProductModal.find({Title:name});
  const list = await SellerModal.find({SellerId:dt[0].SellerId});
  return res.json({data:list})
});
router.put('/UptProducts/:ProductId',async(req,res)=>{
  const id = req.params.ProductId;
    // const Title = req.body.Title;
    // const Price = req.body.Price;
    // const Category = req.body.Category;
    // const CompanyId = req.body.CompanyId;
    // const SellerId = req.body.SellerId;
    // const data = {Title:Title,Price:Price,Category:Category,CompanyId:CompanyId,SellerId:SellerId}
    const data = req.body;
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