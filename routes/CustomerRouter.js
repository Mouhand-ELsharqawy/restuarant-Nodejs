const Customercontroller = require('../controllers/CustomerController')
const express = require('express');
const router = express.Router();

router.get('/customer',(req,res)=>{
    Customercontroller.GetAll(req,res);
});
router.post('/customer',(req,res)=>{
    Customercontroller.Create(req,res);
});
router.get('/customer/:id',(req,res)=>{
    Customercontroller.Create(req,res);
});
router.patch('/customer/:id',(req,res)=>{
    Customercontroller.Update(req,res);
});

router.delete('/customer/:id',(rea,res)=>{
    Customercontroller.Delete(req,res);
});

module.exports = router