const ItemModel = require('../models/ItemModel');
const OrderModel = require('../models/OrderModel')

exports.GetAll = async (req,res)=>{
    try{
        const orders = await OrderModel.find();
        res.status(200).json({ OrdersData: orders });
    }catch(error){
        res.status(500).json({ error: error.message });
    }
}

exports.Create = async(req,res)=>{
    try{
        const itemid = await ItemModel.findOne({ Name: req.body.item }).id;
        const order = await OrderModel.create({
            ItemId: itemid ,
            NumberOfItem: req.body.number,
            Price: req.body.price
        });
        
        res.status(200).json({ OrderData: order });

    }catch(error){
        res.status(500).json({ error: error.message });
    }
}

exports.FindOne = async(req,res)=>{
    try{
        const order = await OrderModel.findById(req.params.id);
        res.status(200).json({ OrderData: order });

    }catch(error){
        res.status(500).json({ error: error.message });
    }
}

exports.Update = async(req,res)=>{
    try{
        const itemid = await ItemModel.findOne({ Name: req.body.item }).id;
        const order = await OrderModel.findByIdAndUpdate(req.params.id,{
            ItemId: itemid ,
            NumberOfItem: req.body.number,
            Price: req.body.price
        },{
            new:true
        });
        res.status(200).json({ OrderData: order });
    }catch(error){
        res.status(500).json({ error: error.message });
    }
}

exports.Delete = async(req,res)=>{
    try{
        await OrderModel.findByIdAndRemove(req.params.id);
        res.status(200).json({ OrderMessage: 'Order Data Removed' });
    }catch(error){
        res.status(500).json({ error: error.message }); 
    }
}