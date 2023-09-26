const BillController = require('../controllers/BillController')
const express = require('express')
const router = express.Router()

router.get('/bill',(req,res)=>{
    BillController.GetAll(req,res);
});

router.post('/bill',(req,res)=>{
    BillController.Create(req,res);
});
router.get('/bill/:id',(req,res)=>{
    BillController.FindOne(req,res);
});
router.patch('/bill/:id',(req,res)=>{
    BillController.Update(req,res);
});
router.delete('/bill/:id',(req,res)=>{
    BillController.Delete(req,res)
});

module.exports = router;