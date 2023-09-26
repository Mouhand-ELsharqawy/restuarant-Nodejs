const CheffModel = require('../models/CheffModel');

exports.GetAll = async (req,res)=>{
    try{
        const cheffs = await CheffModel.find();
        res.status(200).json({ CheffData: cheffs });
    }catch(error){
        res.status(500).json({ error: error.message });
    }
}
exports.Create = async (req,res)=>{
    try{
        const cheff = await CheffModel.create({
            name: {
                FirstName: req.body.firstname,
                MiddleName: req.body.middlename,
                LastName: req.body.lastname,
            },
            PhoneNumber: req.body.phone,
            Email: req.body.email,
            shift: req.body.shift
        });

        res.status(200).json({ CheffMessage: cheff });
    }catch(error){
        res.status(500).json({ error: error.message });
    }
}
exports.FindOne = async (req,res)=>{
    try{
        const cheff = await CheffModel.findById(req.params.id);
        res.status(200).json({ CheffData: cheff });
    }catch(error){
        res.status(500).json({ error: error.message });
    }
}

exports.Update = async (req,res)=>{
    try{
        const cheff = await CheffModel.findByIdAndUpdate(req.params.id,{
            name: {
                FirstName: req.body.firstname,
                MiddleName: req.body.middlename,
                LastName: req.body.lastname,
            },
            PhoneNumber: req.body.phone,
            Email: req.body.email,
            shift: req.body.shift
        },{
            new:true
        })
    }catch(error){
        res.status(500).json({ error: error.message });
    }
}
exports.Delete = async (req,res)=>{
    try{
        await CheffModel.findByIdAndRemove(req.params.id);
        res.status(200).json({ CheffMessage: 'Cheff Data Removed' });
    }catch(error){
        res.status(500).json({ error: error.message });
    }
}