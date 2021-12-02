const mongose = require('mongoose');
const SellerSchema = mongose.Schema({
    CompanyId:String,
    Name:String,
    ProductId:[{type:String}],
});
const SellerModal = mongose.model("Product",SellerSchema,"Seller")
module.exports = SellerModal;