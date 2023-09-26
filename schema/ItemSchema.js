const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
    Name:{
        type:String,
        required:true
    },
    Quantity:{
        type:String,
        required:true
    },
    Description:{
        type:String,
        required:true
    },
    Price:{
        type:String,
        required:true
    }
},{
    timestamps:true
});
module.exports = ItemSchema;