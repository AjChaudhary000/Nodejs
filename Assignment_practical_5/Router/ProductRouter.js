const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGOOES_URL).then(()=>console.log("connected "));
router.use(express.json());
router.post('/',(req,res)=>{
    return res.json({data:'Product Page ...'})
});
module.exports = router;