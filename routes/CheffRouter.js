const CheffController = require('../controllers/CheffController')
const express = require('express')
const router = express.Router();

router.get('/cheff',(req,res)=>{
    CheffController.GetAll(req,res);
});
router.post('/cheff',(req,res)=>{
    CheffController.Create(req,res);
});
router.get('/cheff/:id',(req,res)=>{
    CheffController.FindOne(req,res);
});
router.patch('/cheff/:id',(req,res)=>{
    CheffController.Update(req,res);
});

router.delete('/cheff/:id',(req,res)=>{
    CheffController.Delete(req,res);
});

module.exports = router;