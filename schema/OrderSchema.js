const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    ItemId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"items",
        required:true
    },
    NumberOfItem:{
        type:Number,
        require:true
    },
    Price:{
        type:Number,
        required:true
    }
},{
    timestamps:true
});

module.exports = OrderSchema;