require("dotenv").config();

const express = require('express');
const mongoose = require('mongoose');
//const cors = require('cors');
const routes = require('./routes');
const handlebars = require('express-handlebars')
const bodyParser = require("body-parser");


const app = express();

app.engine('handlebars', handlebars({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

app.use(bodyParser.urlencoded({extended:false}))


mongoose.connect(
    process.env.MONGO_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

app.use(express.json());
//app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(routes);

module.exports = app;
