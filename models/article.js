//Import
let mongoose = require('mongoose');

let schema = mongoose.schema;

let arcitleSchema = new Schema({

    headline: {
        type: String,
        required: true
    },

    summary: {
        type: String,
        required: true
    },

    url: {
        type: String,
        required: true
    },

    imageURL: {
        type: STring,
        required: true
    },

    slug: {
        type: String
    },

    note:[{
        type: Schema.Types.ObjectId,
        ref: "Note"
    }]
    
});


//Exports
let Article = mongoose.model("Article", arcitleSchema);

module.exports = Article;