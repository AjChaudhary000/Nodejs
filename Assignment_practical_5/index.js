const express = require('express')
const app = express()
const port = 4000
require('dotenv').config();
const mongoose = require('mongoose');
const Product = require('./Router/ProductRouter');
app.use('/Product',Product);
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))