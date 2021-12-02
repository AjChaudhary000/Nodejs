const mongose = require('mongoose');
const SellerSchema = mongose.Schema({
    SellerId:String,
    Name:String,
    Price:String,
    ProductId:[{type:String}],
   
});
const SellerModal = mongose.model("assignment5",SellerSchema,"Seller")
module.exports = SellerModal;