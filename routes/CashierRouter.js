const CashierController = require('../controllers/CashierController');
const express = require('express');
const router = express.Router();

router.get('/cashier',(req,res)=>{
    CashierController.GetAll(req,res);
});
router.post('/cashier',(req,res)=>{
    CashierController.Create(req,res);
});
router.get('/cashier/:id',(req,res)=>{
    CashierController.FindOne(req,res);
});
router.patch('/cashier/:id',(req,res)=>{
    CashierController.Update(req,res);
});
router.delete('/cashier/:id',(req,res)=>{
    CashierController.Delete(req,res);
});

module.exports = router;
