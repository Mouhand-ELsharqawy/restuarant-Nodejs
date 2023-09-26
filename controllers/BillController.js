const BillModel = require('../models/BillModel');
const CustomerModel = require('../models/CustomerModel')
const CashierModel = require('../models/CashierModel')

exports.GetAll = async (req,res)=>{
    try{
        const bills = await BillModel.find();
        res.status(200).json({ bills: bills });
    }catch(error){
        res.status(500).json({ message: error.message });
    }
}

exports.Create = async (req,res)=>{
    try{
        const customerid = await CustomerModel.findOne({ PhoneNumber: req.body.customerphone }).id;
        const cashierid = await CashierModel.findOne({ FirstName: req.body.firstname }).id;
        const bill = await BillModel.create({
            BillNumber: req.body.bill,
            OrderDetail: req.body.order,
            CustomerId: customerid,
            CashierId: cashierid
        });
        res.status(200).json({ BillData: bill });
    }catch(error){
        res.status(500).json({ message: error.message });
    }
}
exports.FindOne = async (req,res)=>{
    try{
        const bill = await BillModel.findById(req.params.id);
        res.status(200).json({ BillData: bill });
    }catch(error){
        res.status(500).json({ message: error.message });
    }
}

exports.Update = async (req,res)=>{
    try{
        const bill = await BillModel.findByIdAndUpdate(req.params.id,{
            BillNumber: req.body.bill,
            OrderDetail: req.body.order,
            CustomerId: customerid,
            CashierId: cashierid
        },{
            new: true
        });
        res.status(200).json({ BillData: bill })
    }catch(error){
        res.status(500).json({ message: error.message });
    }
}

exports.Delete = async (req,res)=>{
    try{
        await BillModel.findByIdAndRemove(req.params.id);
        res.status(200).json({ BillMessage: 'Bill Data Deleted' })
    }catch(error){
        res.status(500).json({ message: error.message });
    }
}