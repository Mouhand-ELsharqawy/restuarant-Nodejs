const ItemModel = require('../models/ItemModel');

exports.GetAll = async(req,res)=>{
     try{
        const items = await ItemModel.find();
        res.status(200).json({ ItemData: items });
     }catch(error){
        res.status(200).json({ error: error.message });
     }
}

exports.Create = async (req,res)=>{
    try{
        const item = await ItemModel.create({
            Name: req.body.name,
            Quantity: req.body.quantity,
            Description: req.body.description,
            Price: req.body.price
        }); 
    }catch(error){
        res.status(200).json({ error: error.message });
     }
}
exports.FindOne = async (req,res)=>{
    try{
        const item = await ItemModel.findById(req.params.id);
        res.status(200).json({ ItemData: item });
    }catch(error){
        res.status(200).json({ error: error.message });
    }
}
exports.Update = async(req,res)=>{
    try{

        const item = await ItemModel.findByIdAndUpdate(req.params.id,{
            Name: req.body.name,
            Quantity: req.body.quantity,
            Description: req.body.description,
            Price: req.body.price
        },{
            new: true
        });

        res.status(200).json({ ItemData: item });

    }catch(error){
        res.status(200).json({ error: error.message });
     }
}

exports.Delete = async (req,res)=>{
    try{
        
        await ItemModel.findByIdAndRemove(req.params.id);
        res.status(200).json({ ItemMessage: 'Item Data Removed' });

    }catch(error){
        res.status(200).json({ error: error.message });
     }
}