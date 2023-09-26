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

const ManagerSchema = new mongoose.Schema({
    Name:NameSchema,
    PhoneNumber:{
        type:String,
        required:true,
        unique:true,
        minLength:11,
        maxLength:11
    },
    BirthDate:{
        type:Date,
        required:true
    },
    Email:{
        type:String,
        required:true,
        unique:true,
        minLength:7,
    },
    NationalID:{
        type:Number,
        required:true,
        unique:true,
        minLength:14,
        maxLength:14
    },
    WhatsUp:{
        type:String,
        required:true,
        unique:true,
        minLength:11,
        maxLength:11
    },
    FaceBook:{
        type:String,
        required:true,
        unique:true
    }
},{
    timestamps:true
}); 

module.exports = ManagerSchema;