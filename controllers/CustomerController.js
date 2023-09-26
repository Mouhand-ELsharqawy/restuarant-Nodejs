const CustomerModel = require('../models/CustomerModel');

exports.GetAll = async (req,res)=>{
    try{
        const customers = await CustomerModel.find();
        res.status(200).json({ CustomerData: customers });
    }catch(error){
        res.status(500).json({ error: error.message });
    }
}

exports.Create = async (req,res)=>{
    try{
        const customer = await CustomerModel.create({
            name: req.body.name,
            PhoneNumber: req.body.phone,
            address:{
                square: req.body.square,
                street: req.body.street,
                villa: req.body.villa,
                building: req.body.build,
                appartment: req.body.appartment 
            }
        });

        res.status(200).json({ CustomerData: customer });
    }catch(error){
        res.status(500).json({ error: error.message });
    }
}
exports.FindOne = async (req,res)=>{
    try{
        const customer = await CustomerModel.findById(req.params.id);
        res.status(200).json({ CustomerData: customer });
    }catch(error){
        res.status(500).json({ error: error.message });
    }
}

exports.Update = async (req,res) => {
    try{
        const customer = await CustomerModel.findByIdAndUpdate(req.params.id,{
            name: req.body.name,
            PhoneNumber: req.body.phone,
            address:{
                square: req.body.square,
                street: req.body.street,
                villa: req.body.villa,
                building: req.body.build,
                appartment: req.body.appartment 
            }
        },{
            new: true
        });
        res.status(200).json({ CustomerData: customer });
    }catch(error){
        res.status(500).json({ error: error.message });
    }
}

exports.Delete = async (req,res)=>{
    try{
        await CustomerModel.findByIdAndRemove(req.params.id);
        res.status(200).json({ CustomerMessage: ' Customer Data Removed ' })
    }catch(error){
        res.status(500).json({ error: error.message });
    }
}