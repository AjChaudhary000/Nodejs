const mongoose = require("mongoose");
const UserDetails = mongoose.Schema({
    UserName:String,
    Password:String,
    Dob:Date,
    MobileNo:String,
    Address:String,
    Gender:String
});
const UserModal = mongoose.model("Student",UserDetails,"Student");
module.exports = UserModal;