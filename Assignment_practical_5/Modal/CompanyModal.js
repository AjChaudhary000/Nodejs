const mongose = require('mongoose');
const CompanySchema = mongose.Schema({
    CompanyId:String,
    Title:String,
    Name:String,
    ProductIds:[String],
});
const CompanyModal = mongose.model("Product",CompanySchema,"Comapnay")
module.exports = CompanyModal;