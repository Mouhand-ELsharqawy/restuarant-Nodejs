const mongoose = require('mongoose');

const BillSchema = new mongoose.Schema({
    BillNumber:{
        type: Number,
        required:true
    },
    OrderDetail:{
        type: String,
        required:true
    },
    CustomerId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'customers',
        required:true
    },
    CashierId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"cashiers",
        required:true
    }
},{
    timestamps:true
});

module.exports = BillSchema;