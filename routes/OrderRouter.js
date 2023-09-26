const OrderController = require('../controllers/OrderController')
const express = require('express')
const router = express.Router();

router.get('/order',(req,res)=>{
    OrderController.GetAll(req,res);
});
router.post('/order',(req,res)=>{
    OrderController.Create(req,res);
});
router.get('/order/:id',(req,res)=>{
    OrderController.FindOne(req,res);
});
router.patch('/order/:id',(req,res)=>{
    OrderController.Update(req,res);
});
router.delete('/order/:id',(req,res)=>{
    OrderController.Delete(req,res);
});

module.exports = router;