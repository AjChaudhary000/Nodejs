const Mongoose = require('mongoose');
const PostDetails = Mongoose.Schema({
    uid:String,
    prost_title:String
});
const PostModel = Mongoose.model("Post",PostDetails,"Post");
module.exports = PostModel;