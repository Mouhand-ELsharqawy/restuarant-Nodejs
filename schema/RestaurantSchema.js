const mongoose = require('mongoose');

const AddressSchema = new mongoose.Schema({
    Square:{
        type:String,
        required:true
    },
    Street:{
        type:String,
        required:true
    }
});

const RestaurantSchema = new mongoose.Schema({
    Name:{
        type:String,
        required:true
    },
    Address:AddressSchema,
    GoogleEarthLocation:{
        type:String, 
        required:true
    },
    TelePhoneNumber:{
        type:String,
        required:true,
        unique:true
    },
    FaceBookAccount:{
        type:String,
        required:true,
        unique:true
    },
    InstegramAccount:{
        type:String,
        Required:true,
        unique:true
    },
    TwitterAccount:{
        type:String,
        required:true,
        unique:true
    },
    WhatsUp:{
        type:String,
        required:true,
        unique:true
    },
    Telegram:{
        type:String,
        required:true,
        unique:true
    }
},{
    timestamps:true
});

module.exports = RestaurantSchema;