const mongose = require('mongoose');
const ProductSchema = mongose.Schema({
    ProductId:String,
    Title:String,
    Price:String,
    Category:[String],
    CompanyId:String,
    SellerId:[String],
});
const ProductModal = mongose.model("assignment5",ProductShema,"Product")
module.exports = ProductModal;