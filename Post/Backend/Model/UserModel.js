const Mongoose = require('mongoose');
const UserDetails = Mongoose.Schema({
    username:String,
    email:String,
    password:String,
});
const UserModel = Mongoose.model("User",UserDetails,"User");
module.exports = UserModel;