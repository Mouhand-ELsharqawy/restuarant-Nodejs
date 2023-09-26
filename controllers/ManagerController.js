const ManagerModel = require('../models/ManagerModel');

exports.GetAll = async (req,res)=>{
    try{
        const managers = await ManagerModel.find();
        res.status(200).json({ ManagerData: managers });
    }catch(error){
        res.status(500).json({ error: error.message });
    }
}

exports.Create = async (req,res)=>{
    try{

        const manager = await ManagerModel.create({
            Name:{
                FirstName: req.body.firstname,
                MiddleName: req.body.middlename,
                LastName: req.body.lastname
            },
            PhoneNumber: req.body.phone ,
            BirthDate: req.body.birth ,
            Email: req.body.email ,
            NationalID: req.body.national,
            WhatsUp: req.body.whatsup ,
            FaceBook: req.body.facebook
        });

        res.status(200).json({ ManagerData: manager });

    }catch(error){
        res.status(500).json({ error: error.message });
    }
}
exports.FindOne = async(req,res)=>{
    try{
        const manager = await ManagerModel.findById(req.params.id);
        res.status(200).json({ ManagerData: manager });

    }catch(error){
        res.status(500).json({ error: error.message });
    }
}
exports.Update = async(req,res)=>{
    try{
        const manager = await ManagerModel.findByIdAndUpdate(req.params.id,{
            Name:{
                FirstName: req.body.firstname,
                MiddleName: req.body.middlename,
                LastName: req.body.lastname
            },
            PhoneNumber: req.body.phone ,
            BirthDate: req.body.birth ,
            Email: req.body.email ,
            NationalID: req.body.national,
            WhatsUp: req.body.whatsup ,
            FaceBook: req.body.facebook
        },{
            new:true
        });
        res.status(200).json({ ManagerData: manager });
    }catch(error){
        res.status(500).json({ error: error.message });
    }
}
exports.Delete = async(req,res)=>{
    try{
        await ManagerModel.findByIdAndRemove(req.params.id);
        res.status(200).json({ ManagerMessage: 'Manager Data Removed' });
    }catch(error){
        res.status(500).json({ error: error.message });
    }
}