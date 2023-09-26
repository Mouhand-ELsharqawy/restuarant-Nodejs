const mongoose = require('mongoose');
const CashierSchema = new mongoose.Schema({
    FirstName:{
        type:String,
        required:true,
        minLength:1,
        maxLength:50
    },
    LastName:{
        type:String,
        required:true,
        minLength:1,
        maxLength:20
    },
    PhoneNumber:{
        type:String,
        required:true,
        unique:true,
        minLength:11,
        maxLength:11
    },
    Email:{
        type:String,
        required:true,
        unique:true
    },
    Shift:{
        type:String,
        required:true
    }
},{
    timestamps:true
});
module.exports = CashierSchema;