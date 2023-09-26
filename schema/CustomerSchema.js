const mongoose = require('mongoose');

const AddressSchema = new mongoose.Schema({
    square:{
        type:String,
        required:true,
    },
    street:{
        type:String
    },
    villa:{
        type:String
    },
    building:{
        type:String
    },
    appartment:{
        type:String
    }
});
const CustomerSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    PhoneNumber:{
        type:String,
        required:true,
        unique:true
    },
    address:AddressSchema
},{
    timestamps:true
});
module.exports = CustomerSchema;