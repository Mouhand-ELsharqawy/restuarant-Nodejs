const RestaurantModel = require('../models/RestaurantModel')

exports.GetAll = async (req,res)=>{
    try{
        const restaurants = await RestaurantModel.find();
        res.status(200).json({ RestaurantData: restaurants });
    }catch(error){
        res.status(500).json({ error: error.message });
    }
}
exports.Create = async (req,res)=>{
    try{
        const restaurant = await RestaurantModel.create({
            Name: req.body.name,
            Address:{
                Square: req.body.square,
                Street: req.body.street
            },
            GoogleEarthLocation: req.body.googleearth,
            TelePhoneNumber: req.body.telephone,
            FaceBookAccount: req.body.facebook,
            InstegramAccount: req.body.instegram,
            TwitterAccount: req.body.twitter,
            WhatsUp: req.body.whatsup,
            Telegram: req.body.telegram
        });

        res.status(200).json({ RestaurantData: restaurant});

    }catch(error){
        res.status(500).json({ error: error.message });
    }
}

exports.FindOne = async (req,res)=>{
    try{
        const restaurant = await RestaurantModel.findById(req.params.id);
        res.status(200).json({ RestaurantData: restaurant });
    }catch(error){
        res.status(500).json({ error: error.message });
    }
}

exports.Update = async (req,res)=>{
    try{
        const restaurant = await RestaurantModel.findByIdAndUpdate(req.params.id,{
            Name: req.body.name,
            Address:{
                Square: req.body.square,
                Street: req.body.street
            },
            GoogleEarthLocation: req.body.googleearth,
            TelePhoneNumber: req.body.telephone,
            FaceBookAccount: req.body.facebook,
            InstegramAccount: req.body.instegram,
            TwitterAccount: req.body.twitter,
            WhatsUp: req.body.whatsup,
            Telegram: req.body.telegram
        },{
            new:true
        });

        res.status(200).json({ RestaurantData: restaurant });

    }catch(error){
        res.status(500).json({ error: error.message });
    }
}

exports.Delete = async (req,res)=>{
    try{
        
        await RestaurantModel.findByIdAndRemove(req.params.id);
        res.status(200).json({ RestaurantMessage: 'Restaurant Data Deleted' });

    }catch(error){
        res.status(500).json({ error: error.message });
    }
}