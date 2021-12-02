const mongose = require('mongoose');
const ProductShema = mongose.Schema({
    ProductId:String,
    Title:String,
    Price:String,
    Category:[{type:String}],
    CompanyId:String,
    SellerId:[{type:String}],
});
mongose.model("Products",ProductShema,"Product")
module.exports = ProductModal;