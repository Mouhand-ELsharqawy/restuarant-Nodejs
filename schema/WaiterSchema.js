const mongoose = require('mongoose');

const NameSchema = new mongoose.Schema({
    FirstName:{
        type:String,
        required:true,
    },
    MiddleName:{
        type:String,
        required:true
    },
    LastName:{
        type:String,
        required:true
    }
});

const WaiterSchema = new mongoose.Schema({
    Name:NameSchema,
    PhoneNumber:{
        type:String,
        required:true,
        unique:true,
        minLength:11,
        maxLength:11
    },
    Address:{
        type:String,
        required:true
    },
    Shift:{
        type:String,
        required:true
    },
    Rent:{
        type:String,
        required:true
    }
},{
    timestamps:true
});

module.exports = WaiterSchema;