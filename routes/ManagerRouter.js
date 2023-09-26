const ManagerController = require('../controllers/ManagerController');
const express = require('express');
const router = express.Router();

router.get('/manager',(req,res)=>{
    ManagerController.GetAll(req,res);
});
router.post('/manager',(req,res)=>{
    ManagerController.Create(req,res);
});
router.get('/manager/:id',(req,res)=>{
    ManagerController.FindOne(req,res);
});
router.patch('/manager/:id',(req,res)=>{
    ManagerController.Update(req,res);
});
router.delete('/manager/:id',(req,res)=>{
    ManagerController.Delete(req,res);
});

module.exports = router;