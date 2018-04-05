const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const request = require('request');
const cheerio = require('cheerio');

let PORT = process.env.PORT || 8080;
let app = express();

//Handlebars Set up
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


//Body-Parser setup for json data
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static("public")); //static conent from public directory in app directory

app.listen(PORT, ()=>{
        console.log(`App listening on PORT ${PORT}`);
})



