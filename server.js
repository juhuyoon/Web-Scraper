//Imports
const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const request = require('request');
const cheerio = require('cheerio');
const logger = require('morgan');

//Setting up variables, default ports
let PORT = process.env.PORT || 3000;
let app = express();

//Body-Parser setup for json data
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public")); //static conent from public directory in app directory


// Connect to the Mongo DB
mongoose.Promise = Promise;
mongoose.connect("mongodb://localhost/webscraper", {
        useMongoClient: true
});

//Handlebars Set up
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');



app.listen(PORT, ()=>{
        console.log(`App listening on PORT ${PORT}`);
})



