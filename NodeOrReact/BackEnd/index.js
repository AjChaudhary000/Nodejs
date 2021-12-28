const express = require('express')
const app = express()
const port = 4000
require("dotenv").config();
const mongoose = require("mongoose");
const UserModal = require("./Modal/UsersModal");
const Login = require("./Router/LoginRouter");
const SignUp = require("./Router/SignUpRouter");
const Search = require("./Router/SearchRouter");
const Display = require("./Router/DisplayRouter");
app.use("/login",Login);
app.use("/signup",SignUp);
app.use("/search",Search);
app.use("/fatch",Display);
mongoose.connect(process.env.MongoUrl).then(()=>console.log("connected ....."));
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))