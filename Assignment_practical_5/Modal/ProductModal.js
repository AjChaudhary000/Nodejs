const mongose = require('mongoose');
const ProductShema = mongose.Schema({
    ProductId:String,
    Title:String,
    Price:String,
    Category:[String],
    CompanyId:String,
    SellerId:[String],
});
const ProductModal = mongose.model("Products",ProductShema,"Product")
module.exports = ProductModal;