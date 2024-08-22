const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema  = new Schema({

    name: {
        type: String, 
        required: true
    },
    startingPrice: {
        type: Number, 
        required: true
    },
    description: {
        type: String, 
        required: true
    },
    image: {
        type: String,
         required: true
        },
    category: {
        type: String, 
        required: true},
    
    });

    const Item = mongoose.model("Item",ItemSchema);
    module.exports = Item;



