const mongose = require('mongoose');
const CompanySchema = mongose.Schema({
    CompanyId:String,
    Name:String,
    ProductId:[{type:String}]
});
const CompanyModal = mongose.model("Product",CompanySchema,"Comapnay")
module.exports = CompanyModal;