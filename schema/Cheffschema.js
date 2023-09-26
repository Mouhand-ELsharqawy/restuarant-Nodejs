const mongoose = require('mongoose');

const NameSchema = new mongoose.Schema({
    FirstName:{
        type:String,
        required:true,
        minLength:1,
        maxLength:40
    },
    MiddleName:{
        type:String,
        required:true,
        minLength:1,
        maxLength:40
    },
    LastName:{
        type:String,
        required:true,
        minLength:1,
        maxLength:40
    }
});

const CheffSchema = new mongoose.Schema({
    name:NameSchema,
    PhoneNumber:{
        type:String,
        required:true,
        minLength:11,
        maxLength:11,
        unique:true
    },
    Email:{
        type:String,
        required:true,
        unique:true
    },
    shift:{
        type:String,
        required:true
    }
},{
    timestamps:true
});
module.exports = CheffSchema;