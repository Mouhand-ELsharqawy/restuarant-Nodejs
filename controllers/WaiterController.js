const WaiterModel = require('../models/WaiterModel');

exports.GetAll = async (req,res)=>{
    try{

        const waiters = await WaiterModel.find();
        res.status(200).json({ WaitersData: waiters });

    }catch(error){
        res.status(500).json({ error: error.message });
    }
}
exports.Create = async(req,res)=>{
    try{
        const waiter = await WaiterModel.create({
            Name:{
                FirstName: req.body.firstname,
                MiddleName: req.body.middlename,
                LastName: req.body.lastname,
            },
            PhoneNumber: req.body.phone,
            Address: req.body.address,
            Shift: req.body.shift,
            Rent: req.body.rent,
        });

        res.status(200).json({ WaiterData: waiter });

    }catch(error){
        res.status(500).json({ error: error.message });
    }
}
exports.FindOne = async(req,res)=>{
    try{
        const waiter = await WaiterModel.findById(req.params.id);
        res.status(200).json({ WaiterData: waiter });

    }catch(error){
        res.status(500).json({ error: error.message });
    }
}

exports.Update = async(req,res)=>{
    try{
        const waiter = await WaiterModel.findByIdAndUpdate(req.params.id,{
            Name:{
                FirstName: req.body.firstname,
                MiddleName: req.body.middlename,
                LastName: req.body.lastname,
            },
            PhoneNumber: req.body.phone,
            Address: req.body.address,
            Shift: req.body.shift,
            Rent: req.body.rent,
        },{
            new:true
        });
        res.status(200).json({ WaiterData: waiter });
    }catch(error){
        res.status(500).json({ error: error.message });
    }
}
exports.Delete = async (req,res)=>{
    try{
        await WaiterModel.findByIdAndRemove(req.params.id);
        res.status(200).json({ WaiterMessage: 'Waiter Data Removed' });
    }catch(error){
        res.status(500).json({ error: error.message });
    }
}
