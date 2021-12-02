const mongose = require('mongoose');
const SellerSchema = mongose.Schema({
    SellerId:String,
    Name:String,
    ProductId:[{type:String}],
});
const SellerModal = mongose.model("assignmnet5",SellerSchema,"Seller")
module.exports = SellerModal;