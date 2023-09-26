const CashierModel = require('../models/CashierModel');


exports.GetAll = async (req,res)=>{
    try{
        const cashiers = await CashierModel.find();
        res.status(200).json({ CashierData: cashiers });
    }catch(error){
        res.status(500).json({ error: error.message });
    }
}

exports.Create = async (req,res)=>{
    try{

        const cashier = await CashierModel.create({
            FirstName: req.body.firstname,
            LastName: req.body.lastname,
            PhoneNumber: req.body.phone,
            Email: req.body.email,
            Shift: req.body.shift
        });

        res.status(200).json({ CashierData: cashier });

    }catch(error){
        res.status(500).json({ error: error.message });
    }
}

exports.FindOne = async (req,res)=>{
    try{
        const cashier = await CashierModel.findById(req.params.id);
        res.status(200).json({ cashierData: cashier });
    }catch(error){
        res.status(500).json({ error: error.message });
    }
}

exports.Update = async (req,res)=>{
    try{
        const cashier = await CashierModel.findByIdAndUpdate(req.params.id,{
            FirstName: req.body.firstname,
            LastName: req.body.lastname,
            PhoneNumber: req.body.phone,
            Email: req.body.email,
            Shift: req.body.shift
        },{
            new:true
        });

        res.status(200).json({ CashierData: cashier });

    }catch(error){
        res.status(500).json({ error: error.message });
    }
}

exports.Delete = async(req,res)=>{
    try{
        await CashierModel.findByIdAndRemove(req.params.id);
        res.status(200).json({ CashierMessage: ' Cashier Data Delete' });
    }catch(error){
        res.status(500).json({ error: error.message });
    }
}