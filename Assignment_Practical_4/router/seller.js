const express = require("express");
const router = express.Router();
router.use(express.json());
const sel = require("../sellerdetail.js")
router.get("/",(req,res)=> res.send("seller page"));

router.post("/addseller",(req,res)=> {

 const sellist = req.body;
 sel.push(sellist)
 res.json({data:sel});
});
router.post("/fetch",(req,res)=> {

    
    res.json({data:sel});
   });
   router.post("/dlt",(req,res)=> {
   
    const dltdata = req.body;
    prod.pop(dltdata);
    
    res.json({data:sel});
   });  

   router.post("/updateseller",(req,res)=> {

    const sellist = req.body;
    
    sel[1]=sellist;
    res.json({data:prod});
   });

module.exports = router;