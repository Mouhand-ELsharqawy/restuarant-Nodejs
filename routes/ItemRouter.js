const ItemController = require('../controllers/ItemControler');
const express = require('express');
const router = express.Router();

router.get('/item',(req,res)=>{
    ItemController.GetAll(req,res);
});

router.post('/item',(req,res)=>{
    ItemController.Create(req,res);
});

router.get('/item/:id',(req,res)=>{
    ItemController.FindOne(req,res);
});

router.patch('/item/:id',(req,res)=>{
    ItemController.Update(req,res);
});

router.delete('/item/:id',(req,res)=>{
    ItemController.Delete(req,res);
});

module.exports = router;