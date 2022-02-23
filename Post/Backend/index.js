const express = require('express')
const app = express()
const port =  4000;
const Mongoose = require('mongoose');
const PostModel = require('./Model/PostModel');
const UserModel = require('./Model/UserModel');
const UserRouter = require('./Router/UserRouter');
const PostRouter = require('./Router/PostRouter');
Mongoose.connect("mongodb://127.0.0.1:27017/Post").then(()=>{
console.log("Connected .....");
});
app.use("/User",UserRouter);
app.use("/Post",PostRouter);
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))