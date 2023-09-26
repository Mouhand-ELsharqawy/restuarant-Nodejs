const WaiterController = require('../controllers/WaiterController')
const express = require('express');
const router = express.Router();

router.get('/waiter',(req,res)=>{
    WaiterController.GetAll(req,res);
});
router.post('/waiter',(req,res)=>{
    WaiterController.Create(req,res);
});
router.get('/waiter/:id',(req,res)=>{
    WaiterController.FindOne(req,res);
});
router.patch('/waiter',(req,res)=>{
    WaiterController.Update(req,res);
});
router.delete('/waiter',(req,res)=>{
    WaiterController.Delete(req,res);
})
module.exports = router;