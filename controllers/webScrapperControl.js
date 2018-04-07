//Imports
let axios = require('axios');
let cheerio = require('cheerio');
let mongoose = require('mongoose');
let db = require('../models');


// If deployed, use the deployed database. Otherwise use the local mongoHeadlines database
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

// Set mongoose to leverage built in JavaScript ES6 Promises
// Connect to the Mongo DB
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI, {
    useMongoClient: true
});

let mongooseConnection = mongoose.Connection;

mongooseConnection.on('error', console.error.bind(console, "connection error: "));
mongooseConnection.once('open', function(){
    console.log('Connected to MongoDB!') 
});

//EXPORTS
module.exports = (app) {
//Default Route
    app.get("/", (req, res) => res.render("index"));
}

//Scraping Articles
    app.get("/api/search", (req, res)=> {

        axois.get("https://www.npr.org/sections/news/").then(response => {
            let $ = cheerio.load(response.data);
        //storage of cheerio objects
            let handlebarsObject = {
                data: []
            };

            $("article").each((i, element) => {
                const imageLink = $(element).children('.item-image').children('.imagewrap').children('a').children('img').attr('src');

                if (imageLink) {
                    let imageLength = imageLink.length;
                    let goodImageLink = imageLink.substr(0, imageLength -  11) + '800-c100.jpg'; 
                }
            })
        })
    })